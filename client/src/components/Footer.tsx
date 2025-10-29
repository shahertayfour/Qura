import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="قرى AI" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">قُرى AI</span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter' }}>Qura AI</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.story")}
                </a>
              </li>
              <li>
                <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.impact")}
                </a>
              </li>
              <li>
                <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.join")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@qura-ai.ae" className="text-sm hover:text-primary transition-colors" style={{ fontFamily: 'Inter' }}>
                  info@qura-ai.ae
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+971507300052" className="text-sm hover:text-primary transition-colors" style={{ fontFamily: 'Inter' }}>
                  +971 50 730 0052
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} قُرى AI. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
