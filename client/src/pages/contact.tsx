import { useLanguage } from "@/lib/language-context";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center" data-testid="page-contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          {t("Contact Us", "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902")}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          {t(
            "Get in touch with us for any queries, support or booking a demo for our products. We're here to help you.",
            "\u0915\u093F\u0938\u0940 \u092D\u0940 \u092A\u094D\u0930\u0936\u094D\u0928, \u0938\u0939\u093E\u092F\u0924\u093E \u092F\u093E \u0939\u092E\u093E\u0930\u0947 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0921\u0947\u092E\u094B \u092C\u0941\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0939\u092E\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964 \u0939\u092E \u0906\u092A\u0915\u0940 \u092E\u0926\u0926 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0939\u0948\u0902\u0964"
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm">+91 888 258 9392</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm">info@krashuved.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-left">{t("172 Divya Vihar, Aurobindo, Jakhya, Bhawarasala, Sanwer, Indore, 453555", "172 \u0926\u093F\u0935\u094D\u092F \u0935\u093F\u0939\u093E\u0930, \u0911\u0930\u094B\u092C\u093F\u0902\u0926\u094B, \u091C\u0916\u094D\u092F\u093E, \u092D\u0935\u0930\u093E\u0938\u0932\u093E, \u0938\u093E\u0902\u0935\u0947\u0930, \u0907\u0902\u0926\u094C\u0930, 453555")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
