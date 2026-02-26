import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/lib/language-context";
import { Skeleton } from "@/components/ui/skeleton";
import type { Banner } from "@shared/schema";

export default function HeroBanner() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const { data: bannerList, isLoading } = useQuery<Banner[]>({
    queryKey: ["/api/banners"],
  });

  const totalSlides = bannerList?.length || 0;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, totalSlides]);

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 pt-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7]">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (!bannerList || bannerList.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 pt-4">
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] bg-muted flex items-center justify-center rounded-2xl">
          <p className="text-muted-foreground">No banners available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 pt-4">
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] overflow-hidden rounded-2xl" data-testid="hero-banner">
      {bannerList.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          data-testid={`banner-slide-${banner.id}`}
        >
          <img
            src={banner.imageUrl}
            alt={lang === "en" ? banner.captionEn : banner.captionHi}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-16 lg:p-20">
            <h2
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight drop-shadow-lg"
              data-testid={`text-banner-caption-${banner.id}`}
            >
              {lang === "en" ? banner.captionEn : banner.captionHi}
            </h2>
            {(banner.subCaptionEn || banner.subCaptionHi) && (
              <p
                className="text-white/90 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl drop-shadow-md"
                data-testid={`text-banner-subcaption-${banner.id}`}
              >
                {lang === "en" ? banner.subCaptionEn : banner.subCaptionHi}
              </p>
            )}
          </div>
        </div>
      ))}

      {totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" data-testid="banner-indicators">
          {bannerList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current ? "bg-white w-8" : "bg-white/50"
              }`}
              data-testid={`button-banner-dot-${index}`}
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
