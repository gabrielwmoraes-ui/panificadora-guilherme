import { Hero } from "@/components/sections/Hero";
import { WelcomeStrip } from "@/components/sections/WelcomeStrip";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { GallerySection } from "@/components/sections/GallerySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationHours } from "@/components/sections/LocationHours";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeStrip />
      <FeaturedProducts />
      <BrandMarquee />
      <AboutSplit />
      <GallerySection />
      <Testimonials />
      <LocationHours />
      <FinalCTA />
    </>
  );
}
