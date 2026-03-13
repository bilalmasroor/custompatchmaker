
import Quality from "@/components/sections/crafted-passion";
import Contact from "@/components/sections/contact-quote";
import Collection from "@/components/sections/collection-showcase";
import BenefitsStrip from "@/components/sections/benefits-strip";
import Faq from "@/components/sections/faq";
import PatchTypes from "@/components/sections/feature-grid";
import Hero from "@/components/sections/hero";
import OrderProcess from "@/components/sections/product-showcase";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Reviews from "@/components/sections/testimonials";
import HighlightsStrip from "@/components/sections/trust-strip";
import WhyChoose from "@/components/sections/why-choose";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B]">
      <SiteHeader />
      <main>
        <Hero />
        <BenefitsStrip />
        <HighlightsStrip />
        <PatchTypes />
        <OrderProcess />
        <WhyChoose />
        <Quality />
        <Contact />
        <Collection />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
