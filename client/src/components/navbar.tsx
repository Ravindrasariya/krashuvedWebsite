import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", labelEn: "Home", labelHi: "\u0939\u094B\u092E" },
  { path: "/products", labelEn: "Products", labelHi: "\u0909\u0924\u094D\u092A\u093E\u0926" },
  { path: "/about", labelEn: "About Us", labelHi: "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902" },
  { path: "/contact", labelEn: "Contact Us", labelHi: "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902" },
];

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight">KrashuVed</span>
                <span className="text-[10px] text-muted-foreground leading-none">
                  {t("Your Trust, Our Priority", "\u0906\u092A\u0915\u093E \u0935\u093F\u0936\u094D\u0935\u093E\u0938, \u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E")}
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80"
                  }`}
                  data-testid={`link-nav-${item.labelEn.toLowerCase().replace(" ", "-")}`}
                >
                  {t(item.labelEn, item.labelHi)}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="gap-1.5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{lang === "en" ? "HI" : "EN"}</span>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" data-testid="button-mobile-menu">
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span
                        className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                          location === item.path
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/80"
                        }`}
                        onClick={() => setOpen(false)}
                        data-testid={`link-mobile-${item.labelEn.toLowerCase().replace(" ", "-")}`}
                      >
                        {t(item.labelEn, item.labelHi)}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
