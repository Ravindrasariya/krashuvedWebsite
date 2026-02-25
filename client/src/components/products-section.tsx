import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Users, TrendingUp, ShoppingBag, Sprout, ExternalLink } from "lucide-react";

const products = [
  {
    id: "csm",
    nameEn: "Cold Store Manager (CSM)",
    nameHi: "\u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u092E\u0948\u0928\u0947\u091C\u0930 (CSM)",
    descEn:
      "Easy-to-use software to manage end-to-end operations of your cold store. Say goodbye to managing multiple registers manually. Get all information at your fingertips \u2014 no need to be physically present. Track inventory, billing, and operations seamlessly.",
    descHi:
      "\u0906\u092A\u0915\u0947 \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u0915\u0947 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0938\u0902\u091A\u093E\u0932\u0928 \u0915\u094B \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0906\u0938\u093E\u0928 \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930\u0964 \u0915\u0908 \u0930\u091C\u093F\u0938\u094D\u091F\u0930\u094B\u0902 \u0915\u094B \u092E\u0948\u0928\u094D\u092F\u0941\u0905\u0932\u0940 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0928\u0947 \u0938\u0947 \u092E\u0941\u0915\u094D\u0924\u093F\u0964 \u0938\u092D\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0906\u092A\u0915\u0940 \u0909\u0902\u0917\u0932\u093F\u092F\u094B\u0902 \u092A\u0930 \u2014 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0930\u0942\u092A \u0938\u0947 \u0909\u092A\u0938\u094D\u0925\u093F\u0924 \u0939\u094B\u0928\u0947 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0928\u0939\u0940\u0902\u0964",
    image: "/images/product-csm.png",
    icon: Monitor,
    comingSoon: false,
    link: "https://csm.krashuved.com/",
  },
  {
    id: "mandi",
    nameEn: "Mandi Mitra",
    nameHi: "\u092E\u0902\u0921\u0940 \u092E\u093F\u0924\u094D\u0930",
    descEn:
      "Manage end-to-end farmer onboarding, bidding, receipt generation, due tracking, and cash management in a single easy-to-use software. Streamline your mandi operations and focus on what matters.",
    descHi:
      "\u0915\u093F\u0938\u093E\u0928 \u0911\u0928\u092C\u094B\u0930\u094D\u0921\u093F\u0902\u0917, \u092C\u094B\u0932\u0940, \u0930\u0938\u0940\u0926 \u0928\u093F\u0930\u094D\u092E\u093E\u0923, \u092C\u0915\u093E\u092F\u093E \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917 \u0914\u0930 \u0928\u0917\u0926 \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0915\u094B \u090F\u0915 \u0906\u0938\u093E\u0928 \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u092E\u0947\u0902 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0947\u0902\u0964 \u0905\u092A\u0928\u0940 \u092E\u0902\u0921\u0940 \u0915\u0947 \u0938\u0902\u091A\u093E\u0932\u0928 \u0915\u094B \u0938\u0941\u0935\u094D\u092F\u0935\u0938\u094D\u0925\u093F\u0924 \u0915\u0930\u0947\u0902\u0964",
    image: "/images/product-mandi.png",
    icon: Users,
    comingSoon: false,
    link: "https://mm.krashuved.com/",
  },
  {
    id: "vyappar",
    nameEn: "Vyappar Vriddhi",
    nameHi: "\u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0935\u0943\u0926\u094D\u0927\u093F",
    descEn:
      "Manage all your transactions through Mandi, Farm gate, and Cold store via a single app. Track finances, manage dues, inventory, and every transaction with ease. Your complete business management solution.",
    descHi:
      "\u092E\u0902\u0921\u0940, \u092B\u093E\u0930\u094D\u092E \u0917\u0947\u091F \u0914\u0930 \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947 \u0905\u092A\u0928\u0947 \u0938\u092D\u0940 \u0932\u0947\u0928\u0926\u0947\u0928 \u090F\u0915 \u0939\u0940 \u0910\u092A \u0938\u0947 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0947\u0902\u0964 \u0935\u093F\u0924\u094D\u0924, \u092C\u0915\u093E\u092F\u093E, \u0907\u0902\u0935\u0947\u0902\u091F\u094D\u0930\u0940 \u0914\u0930 \u0939\u0930 \u0932\u0947\u0928\u0926\u0947\u0928 \u0915\u094B \u0906\u0938\u093E\u0928\u0940 \u0938\u0947 \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0947\u0902\u0964",
    image: "/images/product-vyappar.png",
    icon: TrendingUp,
    comingSoon: false,
    link: "https://vv.krashuved.com/",
  },
  {
    id: "pesticide",
    nameEn: "Pesticide Shop",
    nameHi: "\u0915\u0940\u091F\u0928\u093E\u0936\u0915 \u0926\u0941\u0915\u093E\u0928",
    descEn:
      "Manage billing, due tracking, and suppliers in an easy-to-use software designed for pesticide and fertilizer shops. Simplify your retail operations and grow your business.",
    descHi:
      "\u0915\u0940\u091F\u0928\u093E\u0936\u0915 \u0914\u0930 \u0909\u0930\u094D\u0935\u0930\u0915 \u0926\u0941\u0915\u093E\u0928\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0915\u093F\u090F \u0917\u090F \u0906\u0938\u093E\u0928 \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u092E\u0947\u0902 \u092C\u093F\u0932\u093F\u0902\u0917, \u092C\u0915\u093E\u092F\u093E \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917 \u0914\u0930 \u0906\u092A\u0942\u0930\u094D\u0924\u093F\u0915\u0930\u094D\u0924\u093E\u0913\u0902 \u0915\u093E \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0915\u0930\u0947\u0902\u0964",
    image: "/images/product-pesticide.png",
    icon: ShoppingBag,
    comingSoon: true,
    link: null,
  },
  {
    id: "farmer",
    nameEn: "Farmer App",
    nameHi: "\u0915\u093F\u0938\u093E\u0928 \u0910\u092A",
    descEn:
      "Check crop trends, book seed and soil tests, manage farming activities, track crop timelines, and handle rental machinery dues \u2014 all from your phone. Empowering farmers with technology.",
    descHi:
      "\u092B\u0938\u0932 \u0930\u0941\u091D\u093E\u0928\u094B\u0902 \u0915\u0940 \u091C\u093E\u0901\u091A \u0915\u0930\u0947\u0902, \u092C\u0940\u091C \u0914\u0930 \u092E\u093F\u091F\u094D\u091F\u0940 \u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u092C\u0941\u0915 \u0915\u0930\u0947\u0902, \u0916\u0947\u0924\u0940 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u094B\u0902 \u0915\u093E \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0915\u0930\u0947\u0902, \u092B\u0938\u0932 \u0938\u092E\u092F\u0930\u0947\u0916\u093E \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0915\u093F\u0930\u093E\u090F \u0915\u0940 \u092E\u0936\u0940\u0928\u0930\u0940 \u0915\u0947 \u092C\u0915\u093E\u092F\u0947 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0947\u0902 \u2014 \u0938\u092C \u0905\u092A\u0928\u0947 \u092B\u094B\u0928 \u0938\u0947\u0964",
    image: "/images/product-farmer.png",
    icon: Sprout,
    comingSoon: true,
    link: null,
  },
];

export default function ProductsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-background" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">
            {t("Our Solutions", "\u0939\u092E\u093E\u0930\u0947 \u0938\u092E\u093E\u0927\u093E\u0928")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-products-title">
            {t("Products", "\u0909\u0924\u094D\u092A\u093E\u0926")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Empowering agriculture with technology-driven solutions for every stakeholder in the value chain.",
              "\u092E\u0942\u0932\u094D\u092F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u092E\u0947\u0902 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0939\u093F\u0924\u0927\u093E\u0930\u0915 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940-\u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u0938\u092E\u093E\u0927\u093E\u0928\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0915\u0943\u0937\u093F \u0915\u094B \u0938\u0936\u0915\u094D\u0924 \u092C\u0928\u093E\u0928\u093E\u0964"
            )}
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
                data-testid={`product-card-${product.id}`}
              >
                <div className="w-full lg:w-1/2">
                  {product.link ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="block" data-testid={`link-product-image-${product.id}`}>
                      <div className="relative rounded-md overflow-hidden group cursor-pointer">
                        <img
                          src={product.image}
                          alt={product.nameEn}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="bg-white/90 text-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1.5">
                            {t("Visit", "\u0926\u0947\u0916\u0947\u0902")} <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative rounded-md overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.nameEn}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.comingSoon && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="default" className="text-sm px-3 py-1">
                            {t("Coming Soon", "\u091C\u0932\u094D\u0926 \u0906 \u0930\u0939\u093E \u0939\u0948")}
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold"
                      data-testid={`text-product-name-${product.id}`}
                    >
                      {t(product.nameEn, product.nameHi)}
                    </h3>
                  </div>
                  <p
                    className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                    data-testid={`text-product-desc-${product.id}`}
                  >
                    {t(product.descEn, product.descHi)}
                  </p>
                  {product.link ? (
                    <div className="pt-2">
                      <a href={product.link} target="_blank" rel="noopener noreferrer" data-testid={`link-product-visit-${product.id}`}>
                        <Button variant="default" className="gap-2">
                          {t("Try Now", "\u0905\u092D\u0940 \u0906\u091C\u093C\u092E\u093E\u090F\u0902")}
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  ) : product.comingSoon ? (
                    <div className="pt-2">
                      <Badge variant="outline" className="text-sm">
                        {t("Coming Soon", "\u091C\u0932\u094D\u0926 \u0906 \u0930\u0939\u093E \u0939\u0948")}
                      </Badge>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
