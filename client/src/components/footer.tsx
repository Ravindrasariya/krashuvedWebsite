import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-4">
          <div className="flex items-center gap-2">
            <img src="/images/krashuved-logo.png" alt="KrashuVed" className="w-8 h-8 object-contain brightness-0 invert" />
            <div>
              <span className="font-bold text-lg">
                <span style={{ color: "#4CAF50" }}>Krashu</span>
                <span style={{ color: "#FF9800" }}>Ved</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            <Link href="/"><span className="text-background/70 cursor-pointer" data-testid="link-footer-home">{t("Home", "\u0939\u094B\u092E")}</span></Link>
            <Link href="/products"><span className="text-background/70 cursor-pointer" data-testid="link-footer-products">{t("Products", "\u0909\u0924\u094D\u092A\u093E\u0926")}</span></Link>
            <Link href="/about"><span className="text-background/70 cursor-pointer" data-testid="link-footer-about">{t("About Us", "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902")}</span></Link>
            <Link href="/contact"><span className="text-background/70 cursor-pointer" data-testid="link-footer-contact">{t("Contact Us", "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902")}</span></Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            <span className="flex items-center gap-1.5 text-background/70">
              <Phone className="w-3.5 h-3.5 text-primary" data-testid="text-footer-phone" />+91 98765 43210
            </span>
            <span className="flex items-center gap-1.5 text-background/70">
              <Mail className="w-3.5 h-3.5 text-primary" data-testid="text-footer-email" />info@krashuved.com
            </span>
            <span className="flex items-center gap-1.5 text-background/70">
              <MapPin className="w-3.5 h-3.5 text-primary" data-testid="text-footer-address" />{t("India", "\u092D\u093E\u0930\u0924")}
            </span>
          </div>
        </div>

        <div className="border-t border-background/10 mt-4 pt-3 text-center">
          <p className="text-background/50 text-xs" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} KrashuVed. {t("All rights reserved.", "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915\u093E\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924\u0964")}
          </p>
        </div>
      </div>
    </footer>
  );
}
