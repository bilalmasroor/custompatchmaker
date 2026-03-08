import Image from "next/image";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Container from "@/components/layout/container";
import EmbroideredVersatileOptionsSection from "@/components/sections/embroidered-versatile-options-section";
import EmbroideredWhyChooseSection from "@/components/sections/embroidered-why-choose-section";
import ChenilleBackingBorderOptionsSection from "@/components/sections/chenille-backing-border-options-section";
import ServiceTextureCtaSection from "@/components/sections/service-texture-cta-section";
import PatchCoverageStylesSection from "@/components/sections/patch-coverage-styles-section";
import ContactQuoteSection from "@/components/sections/contact-quote-section";
import ServiceStorySplitSection from "@/components/sections/service-story-split-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function EmbroideredPatchesPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B]">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-[#750A11] bg-[#980F18]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#980F18]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.065)_1px,transparent_1px)] bg-size-[118px_118px,118px_118px] opacity-35" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),rgba(0,0,0,0.16))]" />
          </div>

          <Container>
            <div className="relative z-10 grid min-h-[570px] items-center gap-8 py-12 sm:py-14 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-4 lg:py-16">
              <div className="max-w-[520px] text-white">
                <p className="inline-flex rounded-[16px] border border-[#FFFFFF] px-[14px] py-[4px] text-[16px] font-semibold leading-none tracking-[-0.02em] text-[#FFFFFF] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                  Custom Embroidered Patches
                </p>

                <h1 className="mt-5 text-[32px] font-[600] leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] [font-family:var(--font-poppins)] sm:text-[40px] lg:text-[46px]">
                  Crafted with Detail,
                  <br />
                  Designed to Impress
                </h1>

                <p className="mt-6 max-w-[500px] text-[16px] leading-[1.42] text-[#FFFFFF] sm:text-[17px]">
                  At <strong>Custom Patch Maker</strong>, we take pride in blending traditional embroidery techniques
                  with modern precision to craft <strong>high-quality embroidered patches in Canada</strong>. Whether
                  you need patches for uniforms, jackets, fashion apparel, or branding, each patch we produce is made
                  to look sharp, feel premium, and last through every wear. Every thread tells your story, stitched
                  with care, designed with purpose, and made to impress.
                </p>

                <a
                  href="#"
                  className="mt-9 inline-flex h-[54px] items-center justify-center rounded-[4px] bg-[#FFFFFF] px-7 text-[16px] font-normal leading-none text-[#D0101E] transition hover:bg-[#F5F5F5] sm:px-8 sm:text-[18px] lg:px-9 lg:text-[20px]"
                >
                  Start Your Order
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto lg:max-w-[500px]">
                <Image
                  src="/images/chenille/Hero.png"
                  alt="Custom embroidered patch designs"
                  className="h-auto w-full object-contain"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <EmbroideredVersatileOptionsSection
          imageOverrides={[
            "/images/chenille/1.png",
            "/images/chenille/2.png",
            "/images/chenille/3.png",
          ]}
        />
        
        <EmbroideredWhyChooseSection />
        <ChenilleBackingBorderOptionsSection />
        <ServiceTextureCtaSection
          eyebrow="Vibrant Textures"
          title="Discover Our Premium Chenille Patch Designs"
          paragraphs={[
            <>
              Soft, bold, and full of personality our <strong>custom chenille patches</strong> capture creativity
              through color and texture. Each patch is carefully crafted using high-density yarns to create plush,
              eye-catching designs ideal for varsity jackets, hoodies, and team apparel.
            </>,
            <>
              From school logos to fashion statements, these <strong>chenille patches</strong> bring warmth,
              nostalgia, and durability to every piece. Experience the perfect blend of comfort and creativity with
              patches that truly stand out.
            </>,
          ]}
          buttonText="Start Your Order"
          buttonHref="#"
          backgroundImageSrc="/images/chenille/Simpson.png"
        />

        <PatchCoverageStylesSection />
        <ContactQuoteSection />

        <ServiceStorySplitSection
          title="The Craft and Creativity of Custom Chenille Patches"
          subtitle="The Art and Craft of Perfectly Printed Patches"
          paragraphs={[
            "Chenille patches combine soft textures with bold colors to create eye-catching emblems full of character. Known for their classic varsity-style appeal, these patches are crafted with thick, plush yarns that make every design stand out. Whether showcasing school spirit, sports teams, or brand logos, custom chenille patches bring warmth and personality to every piece.",
            "Their raised surface and intricate detailing make them perfect for jackets, hoodies, and letterman apparel. Built to last and designed to impress, chenille patches blend nostalgia with modern craftsmanship, making them a favorite among creatives and brands alike.",
          ]}
          imageSrc="https://custompatchmakers.ca/wp-content/uploads/2025/11/chenille_patches-lettercustom-copyrighted-removebg-preview.png"
          imageAlt="Custom chenille patch collage"
          backgroundImageSrc="/images/chenille/Simpson.png"
        />
        <TestimonialsSection />
      </main>

      <SiteFooter />
    </div>
  );
}