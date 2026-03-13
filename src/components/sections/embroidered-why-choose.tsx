import Container from "../layout/container";

export default function EmbroideredWhyChoose() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto grid max-w-268 grid-cols-1 items-start gap-6 lg:grid-cols-[502px_minmax(0,1fr)] lg:gap-8">
          <div className="mx-auto w-full max-w-125.5">
            <img
              src="https://custompatchmakers.ca/wp-content/uploads/2025/11/600px_X_750px-removebg-preview.png"
              alt="Embroidered patch showcase"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="max-w-177.5 pt-2">
            <h2 className="text-[32px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[38px] lg:text-[50px]">
              Why Choose Custom
              <br />
              Patch Maker for
              <br />
              Embroidered Patches?
            </h2>

            <p className="mt-5 text-[14px] leading-[1.45] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
              Our embroidered patches deliver the ideal balance of <strong>style, durability, and precision</strong>,
              perfect for any purpose. We combine high-definition stitching with modern production standards to help
              your design look sharp and feel premium.
            </p>

            <p className="mt-4 text-[14px] leading-[1.35] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
              Each patch features:
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-7 text-[14px] leading-[1.35] text-[#2B2B2B] marker:text-[#F2B705] sm:text-[15px] lg:text-[16px]">
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

            <p className="mt-3 text-[14px] leading-[1.35] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
              Whether you’re decorating jackets, hats, or uniforms, our embroidered patches give your apparel a
              polished, professional look.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
