import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-foreground mb-4">الصفحة غير موجودة</h2>
        <p className="text-xl text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <Link href="/">
          <Button size="lg" className="gradient-primary text-primary-foreground">
            <Home className="h-5 w-5 ml-2" />
            العودة للرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
}
