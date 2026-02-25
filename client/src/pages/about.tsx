import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Layers, Users, BarChart3, Wallet, Quote } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      num: "01",
      icon: Layers,
      color: "#4CAF50",
      titleEn: "A Unified Digital Core",
      titleHi: "\u090F\u0915\u0940\u0915\u0943\u0924 \u0921\u093F\u091C\u093F\u091F\u0932 \u0915\u094B\u0930",
      descEn: "From the Cold Store Manager (CSM) and Vyapar Vriddhi for merchants to our Mandi Mitra platform, we have created a single digital thread that tracks the journey of produce from the soil to the final sale. This transparency reduces waste and ensures fair pricing for all.",
      descHi: "\u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u092E\u0948\u0928\u0947\u091C\u0930 (CSM) \u0914\u0930 \u0935\u094D\u092F\u093E\u092A\u093E\u0930\u093F\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0935\u0943\u0926\u094D\u0927\u093F \u0938\u0947 \u0932\u0947\u0915\u0930 \u0939\u092E\u093E\u0930\u0947 \u092E\u0902\u0921\u0940 \u092E\u093F\u0924\u094D\u0930 \u092A\u094D\u0932\u0947\u091F\u092B\u0949\u0930\u094D\u092E \u0924\u0915, \u0939\u092E\u0928\u0947 \u090F\u0915 \u0921\u093F\u091C\u093F\u091F\u0932 \u0927\u093E\u0917\u093E \u092C\u0928\u093E\u092F\u093E \u0939\u0948 \u091C\u094B \u092E\u093F\u091F\u094D\u091F\u0940 \u0938\u0947 \u0905\u0902\u0924\u093F\u092E \u092C\u093F\u0915\u094D\u0930\u0940 \u0924\u0915 \u0909\u092A\u091C \u0915\u0940 \u092F\u093E\u0924\u094D\u0930\u093E \u0915\u094B \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0924\u093E \u0939\u0948\u0964 \u092F\u0939 \u092A\u093E\u0930\u0926\u0930\u094D\u0936\u093F\u0924\u093E \u0905\u092A\u0936\u093F\u0937\u094D\u091F \u0915\u094B \u0915\u092E \u0915\u0930\u0924\u0940 \u0939\u0948 \u0914\u0930 \u0938\u092D\u0940 \u0915\u0947 \u0932\u093F\u090F \u0909\u091A\u093F\u0924 \u092E\u0942\u0932\u094D\u092F \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u0923 \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964",
    },
    {
      num: "02",
      icon: Users,
      color: "#FF9800",
      titleEn: "The Phygital Approach",
      titleHi: "\u092B\u093F\u091C\u093F\u091F\u0932 \u0926\u0943\u0937\u094D\u091F\u093F\u0915\u094B\u0923",
      descEn: "We understand that trust is built on the ground, not just on a screen. Our Krashu Mitras are local professionals who work side-by-side with farmers, providing the human touch needed to navigate the digital transition.",
      descHi: "\u0939\u092E \u0938\u092E\u091D\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u091C\u092E\u0940\u0928 \u092A\u0930 \u092C\u0928\u0924\u093E \u0939\u0948, \u0938\u093F\u0930\u094D\u092B \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u092A\u0930 \u0928\u0939\u0940\u0902\u0964 \u0939\u092E\u093E\u0930\u0947 \u0915\u094D\u0930\u0936\u0941 \u092E\u093F\u0924\u094D\u0930 \u0938\u094D\u0925\u093E\u0928\u0940\u092F \u092A\u0947\u0936\u0947\u0935\u0930 \u0939\u0948\u0902 \u091C\u094B \u0915\u093F\u0938\u093E\u0928\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u092E\u093F\u0932\u0915\u0930 \u0915\u093E\u092E \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u0921\u093F\u091C\u093F\u091F\u0932 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u0928 \u0915\u094B \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0906\u0935\u0936\u094D\u092F\u0915 \u092E\u093E\u0928\u0935\u0940\u092F \u0938\u094D\u092A\u0930\u094D\u0936 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
    },
    {
      num: "03",
      icon: BarChart3,
      color: "#4CAF50",
      titleEn: "Data-Driven Empowerment",
      titleHi: "\u0921\u0947\u091F\u093E-\u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u0938\u0936\u0915\u094D\u0924\u093F\u0915\u0930\u0923",
      descEn: "Leveraging AI for disease detection and advanced statistical regression for price forecasting, we give our stakeholders the tools to make informed decisions. We help farmers time their harvest and storage perfectly to maximize their returns.",
      descHi: "\u0930\u094B\u0917 \u092A\u0939\u091A\u093E\u0928 \u0915\u0947 \u0932\u093F\u090F AI \u0914\u0930 \u092E\u0942\u0932\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u093E\u0928\u0941\u092E\u093E\u0928 \u0915\u0947 \u0932\u093F\u090F \u0909\u0928\u094D\u0928\u0924 \u0938\u093E\u0902\u0916\u094D\u092F\u093F\u0915\u0940\u092F \u092A\u094D\u0930\u0924\u093F\u0917\u092E\u0928 \u0915\u093E \u0932\u093E\u092D \u0909\u0920\u093E\u0924\u0947 \u0939\u0941\u090F, \u0939\u092E \u0905\u092A\u0928\u0947 \u0939\u093F\u0924\u0927\u093E\u0930\u0915\u094B\u0902 \u0915\u094B \u0938\u0942\u091A\u093F\u0924 \u0928\u093F\u0930\u094D\u0923\u092F \u0932\u0947\u0928\u0947 \u0915\u0947 \u0909\u092A\u0915\u0930\u0923 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964 \u0939\u092E \u0915\u093F\u0938\u093E\u0928\u094B\u0902 \u0915\u094B \u0905\u092A\u0928\u0940 \u092B\u0938\u0932 \u0914\u0930 \u092D\u0902\u0921\u093E\u0930\u0923 \u0915\u093E \u0938\u092E\u092F \u0938\u0939\u0940 \u0930\u0916\u0928\u0947 \u092E\u0947\u0902 \u092E\u0926\u0926 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0924\u093E\u0915\u093F \u0909\u0928\u0915\u093E \u0930\u093F\u091F\u0930\u094D\u0928 \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u094B\u0964",
    },
    {
      num: "04",
      icon: Wallet,
      color: "#FF9800",
      titleEn: "Financial Inclusion",
      titleHi: "\u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u092E\u093E\u0935\u0947\u0936\u0928",
      descEn: "Through our integrated transaction systems, we are paving the way for structured credit. By digitizing the records of input shops and mandis, we help farmers and small merchants access the formal financial support they need to scale.",
      descHi: "\u0939\u092E\u093E\u0930\u0947 \u090F\u0915\u0940\u0915\u0943\u0924 \u0932\u0947\u0928\u0926\u0947\u0928 \u092A\u094D\u0930\u0923\u093E\u0932\u093F\u092F\u094B\u0902 \u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947, \u0939\u092E \u0938\u0902\u0930\u091A\u093F\u0924 \u0915\u094D\u0930\u0947\u0921\u093F\u091F \u0915\u093E \u092E\u093E\u0930\u094D\u0917 \u092A\u094D\u0930\u0936\u0938\u094D\u0924 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964 \u0907\u0928\u092A\u0941\u091F \u0926\u0941\u0915\u093E\u0928\u094B\u0902 \u0914\u0930 \u092E\u0902\u0921\u093F\u092F\u094B\u0902 \u0915\u0947 \u0930\u093F\u0915\u0949\u0930\u094D\u0921 \u0915\u094B \u0921\u093F\u091C\u093F\u091F\u0932 \u0915\u0930\u0915\u0947, \u0939\u092E \u0915\u093F\u0938\u093E\u0928\u094B\u0902 \u0914\u0930 \u091B\u094B\u091F\u0947 \u0935\u094D\u092F\u093E\u092A\u093E\u0930\u093F\u092F\u094B\u0902 \u0915\u094B \u0914\u092A\u091A\u093E\u0930\u093F\u0915 \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0939\u093E\u092F\u0924\u093E \u0924\u0915 \u092A\u0939\u0941\u0901\u091A\u0928\u0947 \u092E\u0947\u0902 \u092E\u0926\u0926 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u091C\u093F\u0938\u0915\u0940 \u0909\u0928\u094D\u0939\u0947\u0902 \u0935\u093F\u0915\u093E\u0938 \u0915\u0947 \u0932\u093F\u090F \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0939\u0948\u0964",
    },
  ];

  return (
    <div data-testid="page-about">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/8 via-background to-[#FF9800]/8" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9800]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 text-xs tracking-wider uppercase px-4 py-1.5">
            {t("About Us", "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902")}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight" data-testid="text-about-title">
            {t("Who ", "\u0939\u092E ")}
            <span className="relative inline-block">
              {t("We Are", "\u0915\u094C\u0928 \u0939\u0948\u0902")}
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#FF9800]" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10" data-testid="text-about-intro">
            {t(
              "At KrashuVed, we believe that the backbone of our nation\u2014the farmer\u2014deserves a future rooted in certainty, not chance. Based in the heart of India\u2019s agricultural landscape, we are a technology-driven ecosystem dedicated to digitizing and professionalizing the traditional agricultural supply chain.",
              "KrashuVed \u092E\u0947\u0902, \u0939\u092E \u092E\u093E\u0928\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0939\u092E\u093E\u0930\u0947 \u0926\u0947\u0936 \u0915\u0940 \u0930\u0940\u0922\u093C\u2014\u0915\u093F\u0938\u093E\u0928\u2014\u090F\u0915 \u0910\u0938\u0947 \u092D\u0935\u093F\u0937\u094D\u092F \u0915\u093E \u0939\u0915\u0926\u093E\u0930 \u0939\u0948 \u091C\u094B \u0928\u093F\u0936\u094D\u091A\u093F\u0924\u0924\u093E \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u0939\u094B, \u0928 \u0915\u093F \u0938\u0902\u092F\u094B\u0917 \u092A\u0930\u0964 \u092D\u093E\u0930\u0924 \u0915\u0947 \u0915\u0943\u0937\u093F \u092A\u0930\u093F\u0926\u0943\u0936\u094D\u092F \u0915\u0947 \u0915\u0947\u0902\u0926\u094D\u0930 \u092E\u0947\u0902 \u0938\u094D\u0925\u093F\u0924, \u0939\u092E \u090F\u0915 \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940-\u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u092A\u093E\u0930\u093F\u0938\u094D\u0925\u093F\u0924\u093F\u0915\u0940 \u0924\u0902\u0924\u094D\u0930 \u0939\u0948\u0902 \u091C\u094B \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0915\u0943\u0937\u093F \u0906\u092A\u0942\u0930\u094D\u0924\u093F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u0915\u094B \u0921\u093F\u091C\u093F\u091F\u0932 \u0914\u0930 \u092A\u0947\u0936\u0947\u0935\u0930 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u092E\u0930\u094D\u092A\u093F\u0924 \u0939\u0948\u0964"
            )}
          </p>
          <div className="inline-block bg-card border border-border rounded-xl px-8 py-5 shadow-sm" data-testid="text-about-bridges">
            <p className="text-foreground font-medium text-base sm:text-lg leading-relaxed italic">
              {t(
                "At KrashuVed, we build bridges, not just apps. By combining sophisticated digital tools with our unique Krashu Mitra network, we ensure that the benefits of modern technology reach the last mile, transforming how crops are grown, stored, and sold.",
                "KrashuVed \u092E\u0947\u0902, \u0939\u092E \u092A\u0941\u0932 \u092C\u0928\u093E\u0924\u0947 \u0939\u0948\u0902, \u0938\u093F\u0930\u094D\u092B \u0910\u092A \u0928\u0939\u0940\u0902\u0964 \u0905\u0924\u094D\u092F\u093E\u0927\u0941\u0928\u093F\u0915 \u0921\u093F\u091C\u093F\u091F\u0932 \u091F\u0942\u0932\u094D\u0938 \u0915\u094B \u0939\u092E\u093E\u0930\u0947 \u0905\u0928\u0942\u0920\u0947 \u0915\u094D\u0930\u0936\u0941 \u092E\u093F\u0924\u094D\u0930 \u0928\u0947\u091F\u0935\u0930\u094D\u0915 \u0915\u0947 \u0938\u093E\u0925 \u091C\u094B\u0921\u093C\u0915\u0930, \u0939\u092E \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0906\u0927\u0941\u0928\u093F\u0915 \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0915\u0947 \u0932\u093E\u092D \u0905\u0902\u0924\u093F\u092E \u091B\u094B\u0930 \u0924\u0915 \u092A\u0939\u0941\u0901\u091A\u0947\u0902, \u092F\u0939 \u092C\u0926\u0932\u0924\u0947 \u0939\u0941\u090F \u0915\u093F \u092B\u0938\u0932 \u0915\u0948\u0938\u0947 \u0909\u0917\u093E\u0908 \u091C\u093E\u0924\u0940 \u0939\u0948, \u0938\u0902\u0917\u094D\u0930\u0939\u0940\u0924 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948 \u0914\u0930 \u092C\u0947\u091A\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-vision-mission-title">
              {t("Our Vision & Mission", "\u0939\u092E\u093E\u0930\u0940 \u0926\u0943\u0937\u094D\u091F\u093F \u0914\u0930 \u092E\u093F\u0936\u0928")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4CAF50] to-[#FF9800] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative bg-card rounded-xl p-8 sm:p-10 border border-border hover:shadow-lg transition-shadow duration-300" data-testid="card-vision">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl" style={{ backgroundColor: "#4CAF50" }} />
              <div className="w-14 h-14 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" style={{ color: "#4CAF50" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("Our Vision", "\u0939\u092E\u093E\u0930\u0940 \u0926\u0943\u0937\u094D\u091F\u093F")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "To build a world-class, digitally-integrated agricultural ecosystem where every Indian farmer is empowered with data-driven prosperity, transforming traditional farming into a transparent, predictable, and highly profitable enterprise.",
                  "\u090F\u0915 \u0935\u093F\u0936\u094D\u0935-\u0938\u094D\u0924\u0930\u0940\u092F, \u0921\u093F\u091C\u093F\u091F\u0932 \u0930\u0942\u092A \u0938\u0947 \u090F\u0915\u0940\u0915\u0943\u0924 \u0915\u0943\u0937\u093F \u092A\u093E\u0930\u093F\u0938\u094D\u0925\u093F\u0924\u093F\u0915\u0940 \u0924\u0902\u0924\u094D\u0930 \u0915\u093E \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0915\u0930\u0928\u093E \u091C\u0939\u093E\u0901 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u092D\u093E\u0930\u0924\u0940\u092F \u0915\u093F\u0938\u093E\u0928 \u0921\u0947\u091F\u093E-\u0938\u0902\u091A\u093E\u0932\u093F\u0924 \u0938\u092E\u0943\u0926\u094D\u0927\u093F \u0938\u0947 \u0938\u0936\u0915\u094D\u0924 \u0939\u094B, \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0916\u0947\u0924\u0940 \u0915\u094B \u092A\u093E\u0930\u0926\u0930\u094D\u0936\u0940, \u092A\u0942\u0930\u094D\u0935\u093E\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0914\u0930 \u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u0932\u093E\u092D\u0926\u093E\u092F\u0915 \u0909\u0926\u094D\u092F\u092E \u092E\u0947\u0902 \u092C\u0926\u0932\u0928\u093E\u0964"
                )}
              </p>
            </div>
            <div className="relative bg-card rounded-xl p-8 sm:p-10 border border-border hover:shadow-lg transition-shadow duration-300" data-testid="card-mission">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl" style={{ backgroundColor: "#FF9800" }} />
              <div className="w-14 h-14 rounded-xl bg-[#FF9800]/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7" style={{ color: "#FF9800" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("Our Mission", "\u0939\u092E\u093E\u0930\u093E \u092E\u093F\u0936\u0928")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "To bridge the gap between technology and the grassroots level by providing a seamless \u2018phygital\u2019 platform that connects farmers, merchants, cold storages, and input suppliers. We are committed to replacing manual uncertainty with digital trust\u2014offering real-time insights, financial empowerment, and end-to-end supply chain transparency.",
                  "\u090F\u0915 \u0928\u093F\u0930\u094D\u092C\u093E\u0927 \u2018\u092B\u093F\u091C\u093F\u091F\u0932\u2019 \u092A\u094D\u0932\u0947\u091F\u092B\u0949\u0930\u094D\u092E \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0915\u0947 \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0914\u0930 \u091C\u092E\u0940\u0928\u0940 \u0938\u094D\u0924\u0930 \u0915\u0947 \u092C\u0940\u091A \u0915\u0940 \u0916\u093E\u0908 \u0915\u094B \u092A\u093E\u091F\u0928\u093E \u091C\u094B \u0915\u093F\u0938\u093E\u0928\u094B\u0902, \u0935\u094D\u092F\u093E\u092A\u093E\u0930\u093F\u092F\u094B\u0902, \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930\u0947\u091C \u0914\u0930 \u0907\u0928\u092A\u0941\u091F \u0906\u092A\u0942\u0930\u094D\u0924\u093F\u0915\u0930\u094D\u0924\u093E\u0913\u0902 \u0915\u094B \u091C\u094B\u0921\u093C\u0924\u093E \u0939\u0948\u0964 \u0939\u092E \u092E\u0948\u0928\u094D\u092F\u0941\u0905\u0932 \u0905\u0928\u093F\u0936\u094D\u091A\u093F\u0924\u0924\u093E \u0915\u094B \u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0938\u0947 \u092C\u0926\u0932\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u0924\u093F\u092C\u0926\u094D\u0927 \u0939\u0948\u0902\u2014\u0930\u093F\u092F\u0932-\u091F\u093E\u0907\u092E \u0905\u0902\u0924\u0930\u094D\u0926\u0943\u0937\u094D\u091F\u093F, \u0935\u093F\u0924\u094D\u0924\u0940\u092F \u0938\u0936\u0915\u094D\u0924\u093F\u0915\u0930\u0923 \u0914\u0930 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0906\u092A\u0942\u0930\u094D\u0924\u093F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u092A\u093E\u0930\u0926\u0930\u094D\u0936\u093F\u0924\u093E \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0928\u093E\u0964"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase px-4 py-1.5">
              {t("Why KrashuVed", "\u0915\u094D\u092F\u094B\u0902 KrashuVed")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-difference-title">
              {t("The KrashuVed Difference", "KrashuVed \u0915\u093E \u0905\u0902\u0924\u0930")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4CAF50] to-[#FF9800] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  data-testid={`card-pillar-${pillar.num}`}
                >
                  <div className="h-1 w-full" style={{ backgroundColor: pillar.color }} />
                  <div className="p-8 sm:p-9">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl font-bold opacity-10 leading-none select-none">{pillar.num}</span>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pillar.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{t(pillar.titleEn, pillar.titleHi)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {t(pillar.descEn, pillar.descHi)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 via-transparent to-[#FF9800]/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4CAF50]/15 to-[#FF9800]/15 flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight" data-testid="text-commitment-title">
            {t("Our Commitment", "\u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u0924\u093F\u092C\u0926\u094D\u0927\u0924\u093E")}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold mb-8">
            <span style={{ color: "#4CAF50" }}>{t("Your Trust", "\u0906\u092A\u0915\u093E \u0935\u093F\u0936\u094D\u0935\u093E\u0938")}</span>
            <span className="text-muted-foreground">, </span>
            <span style={{ color: "#FF9800" }}>{t("Our Priority", "\u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E")}</span>
          </p>
          <div className="bg-card border border-border rounded-xl px-8 py-6 shadow-sm">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed" data-testid="text-commitment-body">
              {t(
                "At KrashuVed, we are a partner in the farmer\u2019s journey. Whether it is ensuring the quality of seeds, optimizing cold storage inventory, or providing real-time market trends, KrashuVed is here to ensure that Indian agriculture is ready for the future.",
                "KrashuVed \u092E\u0947\u0902, \u0939\u092E \u0915\u093F\u0938\u093E\u0928 \u0915\u0940 \u092F\u093E\u0924\u094D\u0930\u093E \u092E\u0947\u0902 \u090F\u0915 \u0938\u093E\u0925\u0940 \u0939\u0948\u0902\u0964 \u091A\u093E\u0939\u0947 \u092C\u0940\u091C\u094B\u0902 \u0915\u0940 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0928\u093E \u0939\u094B, \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930\u0947\u091C \u0907\u0928\u094D\u0935\u0947\u0902\u091F\u094D\u0930\u0940 \u0915\u094B \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0915\u0930\u0928\u093E \u0939\u094B, \u092F\u093E \u0930\u093F\u092F\u0932-\u091F\u093E\u0907\u092E \u092C\u093E\u091C\u093E\u0930 \u0930\u0941\u091D\u093E\u0928 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0928\u093E \u0939\u094B, KrashuVed \u092F\u0939 \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0939\u0948 \u0915\u093F \u092D\u093E\u0930\u0924\u0940\u092F \u0915\u0943\u0937\u093F \u092D\u0935\u093F\u0937\u094D\u092F \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930 \u0939\u0948\u0964"
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
