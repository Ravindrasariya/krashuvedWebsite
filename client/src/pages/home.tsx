import HeroBanner from "@/components/hero-banner";
import ProductsSection from "@/components/products-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div data-testid="page-home">
      <HeroBanner />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
}
