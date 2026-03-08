import CustomDesignsSection from "@/components/sections/custom-designs-section";
import CraftedPassionSection from "@/components/sections/crafted-passion-section";
import ContactQuoteSection from "@/components/sections/contact-quote-section";
import CollectionShowcaseSection from "@/components/sections/collection-showcase-section";
import FaqSection from "@/components/sections/faq-section";
import FeatureGrid from "@/components/sections/feature-grid";
import HeroSection from "@/components/sections/hero-section";
import ProductShowcase from "@/components/sections/product-showcase";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import TestimonialsSection from "@/components/sections/testimonials-section";
import TrustStrip from "@/components/sections/trust-strip";
import WhyChooseSection from "@/components/sections/why-choose-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B]">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeatureGrid />
        <ProductShowcase />
        <WhyChooseSection />
        <CustomDesignsSection />
        <CraftedPassionSection />
        <ContactQuoteSection />
        <CollectionShowcaseSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
