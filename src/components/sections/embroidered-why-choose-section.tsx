import Container from "../layout/container";

export default function EmbroideredWhyChooseSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#750A11] bg-[#980F18] py-10 sm:py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#980F18]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[118px_118px,118px_118px] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0.16))]" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,510px)_minmax(0,1fr)] lg:gap-10">
          <div className="mx-auto w-full max-w-[520px]">
            <img
              src="https://custompatchmakers.ca/wp-content/uploads/2025/11/600px_X_750px-removebg-preview.png"
              alt="Embroidered patch showcase"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="max-w-[650px] text-[#FFFFFF]">
            <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] sm:text-[34px] lg:text-[44px]">
              Why Choose Custom
              <br />
              Patch Maker for
              <br />
              Embroidered Patches?
            </h2>

            <p className="mt-6 text-[16px] leading-[1.45] text-[#FFFFFF] sm:text-[17px] lg:text-[18px]">
              Our embroidered patches deliver the ideal balance of <strong>style, durability, and precision</strong>,
              perfect for any purpose. We combine high-definition stitching with modern production standards to help
              your design look sharp and feel premium.
            </p>

            <p className="mt-4 text-[17px] font-medium leading-[1.25] text-[#FFFFFF] sm:text-[18px] lg:text-[20px]">
              Each patch features:
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-8 text-[16px] leading-[1.35] text-[#FFFFFF] marker:text-[#FFFFFF] sm:text-[17px] lg:text-[18px]">
              <li>
                <strong>Vibrant, fade-resistant colors</strong> that hold up over time
              </li>
              <li>
                <strong>Strong stitching and backing</strong> for long-lasting wear
              </li>
              <li>
                <strong>Custom shapes and sizes</strong> tailored to your project
              </li>
              <li>
                <strong>Eco-friendly materials</strong> for sustainable branding
              </li>
              <li>
                <strong>Flexible order options</strong> for individuals, teams, and businesses
              </li>
            </ul>

            <p className="mt-3 text-[16px] leading-[1.35] text-[#FFFFFF] sm:text-[17px] lg:text-[18px]">
              Whether you’re decorating jackets, hats, or uniforms, our embroidered patches give your apparel a
              polished, professional look.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
