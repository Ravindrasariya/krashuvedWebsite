import { storage } from "./storage";
import { log } from "./index";

export async function seedDatabase() {
  try {
    const existingBanners = await storage.getBanners();
    if (existingBanners.length === 0) {
      await storage.createBanner({
        imageUrl: "/images/banner1.png",
        captionEn: "Smart Agriculture, Smarter Future",
        captionHi: "\u0938\u094D\u092E\u093E\u0930\u094D\u091F \u0915\u0943\u0937\u093F, \u0938\u094D\u092E\u093E\u0930\u094D\u091F\u0930 \u092D\u0935\u093F\u0937\u094D\u092F",
        subCaptionEn: "Technology solutions for every stakeholder in the agricultural value chain",
        subCaptionHi: "\u0915\u0943\u0937\u093F \u092E\u0942\u0932\u094D\u092F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E \u092E\u0947\u0902 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0939\u093F\u0924\u0927\u093E\u0930\u0915 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0938\u092E\u093E\u0927\u093E\u0928",
        sortOrder: 1,
        active: true,
      });

      await storage.createBanner({
        imageUrl: "/images/banner2.png",
        captionEn: "Cold Store Management Made Easy",
        captionHi: "\u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0906\u0938\u093E\u0928 \u0939\u0941\u0906",
        subCaptionEn: "End-to-end operations at your fingertips",
        subCaptionHi: "\u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0938\u0902\u091A\u093E\u0932\u0928 \u0906\u092A\u0915\u0940 \u0909\u0902\u0917\u0932\u093F\u092F\u094B\u0902 \u092A\u0930",
        sortOrder: 2,
        active: true,
      });

      await storage.createBanner({
        imageUrl: "/images/banner3.png",
        captionEn: "Empowering Mandi Operations",
        captionHi: "\u092E\u0902\u0921\u0940 \u0938\u0902\u091A\u093E\u0932\u0928 \u0915\u094B \u0938\u0936\u0915\u094D\u0924 \u092C\u0928\u093E\u0928\u093E",
        subCaptionEn: "Streamline bidding, receipts, and cash management",
        subCaptionHi: "\u092C\u094B\u0932\u0940, \u0930\u0938\u0940\u0926 \u0914\u0930 \u0928\u0915\u0926 \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0915\u094B \u0938\u0941\u0935\u094D\u092F\u0935\u0938\u094D\u0925\u093F\u0924 \u0915\u0930\u0947\u0902",
        sortOrder: 3,
        active: true,
      });

      log("Seeded 3 banners");
    }

    const existingTestimonials = await storage.getTestimonials();
    if (existingTestimonials.length === 0) {
      await storage.createTestimonial({
        name: "Rajesh Kumar",
        designation: "Cold Store Manager",
        descriptionEn: "KrashuVed's Cold Store Manager has completely transformed how I run my facility. I no longer need to maintain multiple registers, and I can monitor everything from my phone. Truly a game-changer!",
        descriptionHi: "KrashuVed \u0915\u0947 \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u092E\u0948\u0928\u0947\u091C\u0930 \u0928\u0947 \u092E\u0947\u0930\u0940 \u0938\u0941\u0935\u093F\u0927\u093E \u0915\u094B \u091A\u0932\u093E\u0928\u0947 \u0915\u0947 \u0924\u0930\u0940\u0915\u0947 \u0915\u094B \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u092C\u0926\u0932 \u0926\u093F\u092F\u093E \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u0905\u092C \u0915\u0908 \u0930\u091C\u093F\u0938\u094D\u091F\u0930 \u0930\u0916\u0928\u0947 \u0915\u0940 \u091C\u0930\u0942\u0930\u0924 \u0928\u0939\u0940\u0902 \u0939\u0948, \u0914\u0930 \u092E\u0948\u0902 \u0905\u092A\u0928\u0947 \u092B\u094B\u0928 \u0938\u0947 \u0938\u092C \u0915\u0941\u091B \u092E\u0949\u0928\u093F\u091F\u0930 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0942\u0901\u0964",
        photoUrl: null,
        active: true,
      });

      await storage.createTestimonial({
        name: "Sunita Devi",
        designation: "Farmer",
        descriptionEn: "Mandi Mitra has made selling my produce so much easier. I get fair prices and transparent receipts. The software is simple enough for anyone to use. Highly recommended!",
        descriptionHi: "\u092E\u0902\u0921\u0940 \u092E\u093F\u0924\u094D\u0930 \u0928\u0947 \u092E\u0947\u0930\u0940 \u0909\u092A\u091C \u092C\u0947\u091A\u0928\u093E \u092C\u0939\u0941\u0924 \u0906\u0938\u093E\u0928 \u0915\u0930 \u0926\u093F\u092F\u093E \u0939\u0948\u0964 \u092E\u0941\u091D\u0947 \u0909\u091A\u093F\u0924 \u0926\u093E\u092E \u0914\u0930 \u092A\u093E\u0930\u0926\u0930\u094D\u0936\u0940 \u0930\u0938\u0940\u0926\u0947\u0902 \u092E\u093F\u0932\u0924\u0940 \u0939\u0948\u0902\u0964 \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u0907\u0924\u0928\u093E \u0938\u0930\u0932 \u0939\u0948 \u0915\u093F \u0915\u094B\u0908 \u092D\u0940 \u0907\u0938\u094D\u0924\u0947\u092E\u093E\u0932 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0948\u0964",
        photoUrl: null,
        active: true,
      });

      await storage.createTestimonial({
        name: "Amit Sharma",
        designation: "Merchant",
        descriptionEn: "Vyappar Vriddhi has simplified my entire business operations. From tracking transactions to managing inventory across Mandi and cold stores, everything is in one place now. Best investment I've made!",
        descriptionHi: "Vyappar Vriddhi \u0928\u0947 \u092E\u0947\u0930\u0947 \u092A\u0942\u0930\u0947 \u0935\u094D\u092F\u093E\u092A\u093E\u0930 \u0938\u0902\u091A\u093E\u0932\u0928 \u0915\u094B \u0938\u0930\u0932 \u092C\u0928\u093E \u0926\u093F\u092F\u093E \u0939\u0948\u0964 \u0932\u0947\u0928\u0926\u0947\u0928 \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917 \u0938\u0947 \u0932\u0947\u0915\u0930 \u092E\u0902\u0921\u0940 \u0914\u0930 \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u092E\u0947\u0902 \u0907\u0928\u094D\u0935\u0947\u0902\u091F\u094D\u0930\u0940 \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0924\u0915, \u0938\u092C \u0915\u0941\u091B \u0905\u092C \u090F\u0915 \u0939\u0940 \u091C\u0917\u0939 \u092A\u0930 \u0939\u0948\u0964",
        photoUrl: null,
        active: true,
      });

      await storage.createTestimonial({
        name: "Priya Patel",
        designation: "Cold Store Owner",
        descriptionEn: "The CSM software has saved me hours of work every day. My staff can manage operations without confusion, and I get real-time reports. Outstanding support from the KrashuVed team!",
        descriptionHi: "CSM \u0938\u0949\u092B\u094D\u091F\u0935\u0947\u092F\u0930 \u0928\u0947 \u092E\u0941\u091D\u0947 \u0939\u0930 \u0926\u093F\u0928 \u0918\u0902\u091F\u094B\u0902 \u0915\u0940 \u092E\u0947\u0939\u0928\u0924 \u092C\u091A\u093E\u0908 \u0939\u0948\u0964 \u092E\u0947\u0930\u093E \u0938\u094D\u091F\u093E\u092B \u092C\u093F\u0928\u093E \u0915\u093F\u0938\u0940 \u092D\u094D\u0930\u092E \u0915\u0947 \u0938\u0902\u091A\u093E\u0932\u0928 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0948, \u0914\u0930 \u092E\u0941\u091D\u0947 \u0930\u093F\u092F\u0932-\u091F\u093E\u0907\u092E \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u092E\u093F\u0932\u0924\u0940 \u0939\u0948\u0902\u0964",
        photoUrl: null,
        active: true,
      });

      log("Seeded 4 testimonials");
    }

    const existingProductImages = await storage.getProductImages();
    if (existingProductImages.length === 0) {
      await storage.upsertProductImage("csm", "/images/product-csm.png");
      await storage.upsertProductImage("mandi", "/images/product-mandi.png");
      await storage.upsertProductImage("vyappar", "/images/product-vyappar.png");
      await storage.upsertProductImage("pesticide", "/images/product-pesticide.png");
      await storage.upsertProductImage("farmer", "/images/product-farmer.png");
      log("Seeded 5 product images");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
