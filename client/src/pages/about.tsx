import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center" data-testid="page-about">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          {t("About Us", "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902")}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t(
            "We are building technology solutions that empower every stakeholder in the agricultural value chain. More details coming soon.",
            "\u0939\u092E \u0915\u0943\u0937\u093F \u092E\u0942\u0932\u094D\u092F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u092E\u0947\u0902 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0939\u093F\u0924\u0927\u093E\u0930\u0915 \u0915\u094B \u0938\u0936\u0915\u094D\u0924 \u092C\u0928\u093E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0938\u092E\u093E\u0927\u093E\u0928 \u092C\u0928\u093E \u0930\u0939\u0947 \u0939\u0948\u0902\u0964 \u0905\u0927\u093F\u0915 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u091C\u0932\u094D\u0926 \u0906 \u0930\u0939\u0940 \u0939\u0948\u0964"
          )}
        </p>
      </div>
    </div>
  );
}
