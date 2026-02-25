import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/lib/language-context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, totalSlides]);

  if (isLoading) {
    return (
      <div className="relative w-full aspect-[16/6] md:aspect-[16/5]">
        <Skeleton className="w-full h-full rounded-none" />
      </div>
    );
  }

  if (!bannerList || bannerList.length === 0) {
    return (
      <div className="relative w-full aspect-[16/6] md:aspect-[16/5] bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No banners available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/5] overflow-hidden" data-testid="hero-banner">
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
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white"
            data-testid="button-banner-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white"
            data-testid="button-banner-next"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

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
        </>
      )}
    </div>
  );
}
