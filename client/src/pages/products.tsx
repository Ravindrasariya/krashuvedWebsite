import ProductsSection from "@/components/products-section";
import { useLanguage } from "@/lib/language-context";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div data-testid="page-products">
      <div className="bg-primary/5 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("Our Products", "\u0939\u092E\u093E\u0930\u0947 \u0909\u0924\u094D\u092A\u093E\u0926")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Technology solutions designed for every stakeholder in the agricultural value chain.",
              "\u0915\u0943\u0937\u093F \u092E\u0942\u0932\u094D\u092F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u092E\u0947\u0902 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0939\u093F\u0924\u0927\u093E\u0930\u0915 \u0915\u0947 \u0932\u093F\u090F \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0915\u093F\u090F \u0917\u090F \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0938\u092E\u093E\u0927\u093E\u0928\u0964"
            )}
          </p>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
}
