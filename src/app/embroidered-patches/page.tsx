import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Container from "@/components/layout/container";
import EmbroideredVersatileOptions from "@/components/sections/embroidered-versatile-options";
import EmbroideredWhyChoose from "@/components/sections/embroidered-why-choose";
import PatchCoverageStyles from "@/components/sections/patch-coverage-styles";

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
                <p className="inline-flex rounded-[16px] border border-[#FFFFFF] px-[14px] py-[4px] text-[20px] font-semibold leading-none tracking-[-0.02em] text-[#FFFFFF] sm:text-[24px] md:text-[32px] lg:text-[39px]">
                  Custom Embroidered Patches
                </p>

                  <h1 className="mt-5 font-[var(--font-poppins)] text-[40px] font-medium leading-[1.04] tracking-[-0.02em] text-[#FFFFFF]">
                  Crafted with Detail,
                  <br />
                  Designed to Impress
                </h1>

                <p className="mt-6 max-w-[500px] text-[17px] leading-[1.42] text-[#FFFFFF] sm:text-[18px]">
                  At <strong>Custom Patch Maker</strong>, we take pride in blending traditional embroidery techniques
                  with modern precision to craft <strong>high-quality embroidered patches in Canada</strong>. Whether
                  you need patches for uniforms, jackets, fashion apparel, or branding, each patch we produce is made
                  to look sharp, feel premium, and last through every wear. Every thread tells your story, stitched
                  with care, designed with purpose, and made to impress.
                </p>

                <a
                  href="#"
                  className="mt-9 inline-flex h-[54px] items-center justify-center rounded-[4px] bg-[#FFFFFF] px-7 text-[20px] font-normal leading-none text-[#D0101E] transition hover:bg-[#F5F5F5] sm:px-8 sm:text-[24px] lg:px-9 lg:text-[31px]"
                >
                  Start Your Order
                </a>
              </div>

              <div className="relative mx-auto w-full max-w-[655px] lg:ml-auto lg:max-w-[690px]">
                <img
                  src="/images/chenille/Hero.png"
                  alt="Custom embroidered patch designs"
                  className="h-auto w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </Container>
        </section>

        <EmbroideredVersatileOptions />
        <PatchCoverageStyles />
        <EmbroideredWhyChoose />
      </main>

      <SiteFooter />
    </div>
  );
}
