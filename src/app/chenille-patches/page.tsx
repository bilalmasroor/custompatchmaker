import Image from "next/image";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Container from "@/components/layout/container";
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
        <section className="overflow-hidden border-b border-[#0B1C48]/15 bg-[#FFFFFF]">
          <Container>
            <div className="grid min-h-[640px] items-center gap-10 py-[48px] sm:py-[64px] lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-8 lg:py-[80px]">
              <div className="max-w-[720px]">
                <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#C91A25] sm:text-[15px]">
                  Custom Chenille Patches
                </p>

                <h1 className="mt-[18px] max-w-[700px] text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-[#0B1C48] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                  Crafted with Texture,
                  <br />
                  Made to Stand Out
                </h1>

                <p className="mt-[24px] max-w-[690px] text-[16px] leading-[30px] text-[#2B2B2B] sm:text-[17px]">
                  Our <strong>custom chenille patches</strong> bring bold texture, rich colour, and a classic varsity
                  feel to every design. From school emblems and team jackets to fashion statements and branded
                  merchandise, each piece is crafted to look premium and last.
                </p>

                <p className="mt-[18px] max-w-[690px] text-[16px] leading-[30px] text-[#2B2B2B] sm:text-[17px]">
                  We use high-quality yarns, durable backings, and expert finishing to create chenille patches that
                  feel soft, wear well, and stand out from a distance. If you want depth, warmth, and impact, this is
                  the patch style to choose.
                </p>

                <a
  href="#"
  className="mt-[34px] inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C91A25] px-[30px] text-[15px] font-semibold text-[#FFFFFF] transition-all duration-300 hover:bg-[#C91A25]/90 hover:text-[#FFFFFF]"
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