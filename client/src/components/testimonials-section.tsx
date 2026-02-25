import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { lang, t } = useLanguage();

  const { data: testimonialsList, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-md" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonialsList || testimonialsList.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-card" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">
            {t("Testimonials", "\u092A\u094D\u0930\u0936\u0902\u0938\u093E\u092A\u0924\u094D\u0930")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            {t("What Our Users Say", "\u0939\u092E\u093E\u0930\u0947 \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u094D\u092F\u093E \u0915\u0939\u0924\u0947 \u0939\u0948\u0902")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Trusted by farmers, merchants, and cold store operators across India.",
              "\u092D\u093E\u0930\u0924 \u092D\u0930 \u0915\u0947 \u0915\u093F\u0938\u093E\u0928\u094B\u0902, \u0935\u094D\u092F\u093E\u092A\u093E\u0930\u093F\u092F\u094B\u0902 \u0914\u0930 \u0915\u094B\u0932\u094D\u0921 \u0938\u094D\u091F\u094B\u0930 \u0938\u0902\u091A\u093E\u0932\u0915\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0935\u093F\u0936\u094D\u0935\u0938\u0928\u0940\u092F\u0964"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 relative"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base" data-testid={`text-testimonial-desc-${testimonial.id}`}>
                "{lang === "en" ? testimonial.descriptionEn : testimonial.descriptionHi}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  {testimonial.photoUrl ? (
                    <AvatarImage src={testimonial.photoUrl} alt={testimonial.name} />
                  ) : null}
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs" data-testid={`text-testimonial-designation-${testimonial.id}`}>
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
