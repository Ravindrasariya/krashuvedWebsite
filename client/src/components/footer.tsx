import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <div>
                <span className="font-bold text-lg">KrashuVed</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {t(
                "Your Trust, Our Priority. Empowering agriculture with technology-driven solutions.",
                "\u0906\u092A\u0915\u093E \u0935\u093F\u0936\u094D\u0935\u093E\u0938, \u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E\u0964 \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940-\u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u0938\u092E\u093E\u0927\u093E\u0928\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0915\u0943\u0937\u093F \u0915\u094B \u0938\u0936\u0915\u094D\u0924 \u092C\u0928\u093E\u0928\u093E\u0964"
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("Quick Links", "\u0924\u094D\u0935\u0930\u093F\u0924 \u0932\u093F\u0902\u0915")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/">
                  <span className="text-background/70 text-sm cursor-pointer transition-colors" data-testid="link-footer-home">
                    {t("Home", "\u0939\u094B\u092E")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-background/70 text-sm cursor-pointer transition-colors" data-testid="link-footer-products">
                    {t("Products", "\u0909\u0924\u094D\u092A\u093E\u0926")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-background/70 text-sm cursor-pointer transition-colors" data-testid="link-footer-about">
                    {t("About Us", "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-background/70 text-sm cursor-pointer transition-colors" data-testid="link-footer-contact">
                    {t("Contact Us", "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("Products", "\u0909\u0924\u094D\u092A\u093E\u0926")}
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-background/70 text-sm">Cold Store Manager</span></li>
              <li><span className="text-background/70 text-sm">Mandi Mitra</span></li>
              <li><span className="text-background/70 text-sm">Vyappar Vriddhi</span></li>
              <li><span className="text-background/70 text-sm">Pesticide Shop</span></li>
              <li><span className="text-background/70 text-sm">Farmer App</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("Contact", "\u0938\u0902\u092A\u0930\u094D\u0915")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm" data-testid="text-footer-phone">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm" data-testid="text-footer-email">info@krashuved.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm" data-testid="text-footer-address">
                  {t("India", "\u092D\u093E\u0930\u0924")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/50 text-sm" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} KrashuVed. {t("All rights reserved.", "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915\u093E\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924\u0964")}
          </p>
        </div>
      </div>
    </footer>
  );
}
