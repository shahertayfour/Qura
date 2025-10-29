import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.story"), href: "#story" },
    { name: t("nav.impact"), href: "#impact" },
    { name: t("nav.join"), href: "#join" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/logo.png" alt="قرى AI" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">قُرى AI</span>
                <span className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter' }}>Qura AI</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="h-5 w-5" />
              <span className="text-sm font-medium">{language === "ar" ? "EN" : "ع"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Language Toggle Mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2"
              >
                <Languages className="h-5 w-5" />
                <span className="font-medium">{language === "ar" ? "English" : "العربية"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
