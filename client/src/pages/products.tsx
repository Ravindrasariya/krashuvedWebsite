import ProductsSection from "@/components/products-section";
import { useLanguage } from "@/lib/language-context";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div data-testid="page-products">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/8 via-background to-[#FF9800]/8" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9800]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {t("Our ", "हमारे ")}
            <span className="relative inline-block">
              {t("Products", "उत्पाद")}
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#FF9800]" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t(
              "Technology solutions designed for every stakeholder in the agricultural value chain.",
              "कृषि मूल्य श्रृंखला में प्रत्येक हितधारक के लिए डिज़ाइन किए गए प्रौद्योगिकी समाधान।"
            )}
          </p>
        </div>
      </section>
      <ProductsSection />
    </div>
  );
}
