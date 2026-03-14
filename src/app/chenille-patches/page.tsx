import Image from "next/image";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Container from "@/components/layout/container";
import TypewriterBadge from "@/components/typewriter-badge";
import EmbroideredVersatileOptions from "@/components/sections/embroidered-versatile-options";
import EmbroideredWhyChoose from "@/components/sections/embroidered-why-choose";
import ChenilleBackingBorderOptions from "@/components/sections/chenille-backing-border-options";
import ServiceTextureCta from "@/components/sections/service-texture-cta";
import PatchCoverageStyles from "@/components/sections/patch-coverage-styles";
import Contact from "@/components/sections/contact-quote";
import ServiceStorySplit from "@/components/sections/service-story-split";
import Reviews from "@/components/sections/testimonials";

export default function ChenillePatchesPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B]">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-[#7B1E23] text-[#FFFFFF]">
          {/* Background image from home hero with red overlay */}
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://custompatchmakers.ca/wp-content/uploads/2025/10/hero-section-slider-img-4.webp")',
              }}
            />
            <div className="absolute inset-0 bg-[#7B1E23]/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B1E23]/90 via-[#7B1E23]/70 to-[#7B1E23]/40" />
          </div>

          <Container>
            <div className="relative grid min-h-[640px] items-center gap-10 py-[48px] sm:py-[64px] lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-8 lg:py-[80px]">
              <div className="max-w-[640px]">
                <TypewriterBadge text="Chenille Patches" />

                <h1 className="mt-[20px] max-w-[600px] text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] sm:text-[42px] md:text-[50px] lg:text-[56px]">
                  Custom Chenille Patches
                  <br />
                  for a Bold Statement
                </h1>

                <p className="mt-[24px] text-[15px] font-bold leading-[1.4] text-[#FFFFFF] sm:text-[16px]">
                  Soft texture, standout designs
                </p>
                <p className="mt-[6px] max-w-[600px] text-[15px] leading-[28px] text-[#FFFFFF]/85 sm:text-[16px]">
                  Our Custom Chenille Patches combine vibrant threads with plush texture, making them a favorite for
                  varsity jackets, hoodies, and sportswear. Every chenille patch is made to order crafted with
                  precision, color depth, and durability to keep your logo or artwork looking sharp. Bring your design
                  to life with soft loops, vivid hues, and high-definition stitching that captures every detail of
                  your creativity.
                </p>

                <a
                  href="#get-a-free-quote"
                  className="mt-[34px] inline-flex min-h-[54px] items-center justify-center rounded-md border-2 border-[#FFFFFF] bg-[#FFFFFF] px-[30px] text-[15px] font-semibold text-[#C91A25] transition-all duration-300 hover:bg-transparent hover:text-[#FFFFFF]"
                >
                  Start Your Order
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:max-w-[520px]">
                <Image
                  src="/images/chenille/Hero.png"
                  alt="Custom chenille patch designs"
                  className="h-auto w-full object-contain"
                  width={520}
                  height={520}
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <EmbroideredVersatileOptions
          imageOverrides={[
            "/images/chenille/1.png",
            "/images/chenille/2.png",
            "/images/chenille/3.png",
          ]}
        />
        
        <EmbroideredWhyChoose />
        <ChenilleBackingBorderOptions />
        <ServiceTextureCta
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

        <PatchCoverageStyles />
        <Contact />

        <ServiceStorySplit
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
        <Reviews />
      </main>

      <SiteFooter />
    </div>
  );
}