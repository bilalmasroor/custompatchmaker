import Container from "../layout/container";

export default function CustomDesignsSection() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto grid max-w-268 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-150">
            <h2 className="text-[42px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[50px] lg:text-[58px]">
              Custom Designs for
              <br />
              Every Need
            </h2>

            <p className="mt-5 text-[16px] leading-[1.45] text-[#2B2B2B] sm:text-[17px] lg:text-[18px]">
              From corporate branding to biker clubs, schools, and creative projects, our patches are made to fit every
              style and purpose. We’ve worked with teams, businesses, and individuals across Canada who want their
              patches to stand out, not fade out.
            </p>

            <p className="mt-6 text-[16px] leading-[1.35] text-[#2B2B2B] sm:text-[17px] lg:text-[18px]">
              Some of our most popular requests include:
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-7 text-[16px] leading-[1.35] text-[#2B2B2B] marker:text-[#F2B705] sm:text-[17px] lg:text-[18px]">
              <li>
                Custom patches for <strong>jackets, caps, and uniforms</strong>
              </li>
              <li>
                <strong>Biker and motorcycle patches</strong> for vests
              </li>
              <li>
                <strong>Military and morale patches</strong> for tactical gear
              </li>
              <li>
                <strong>Team and club patches</strong> for unity and recognition
              </li>
              <li>
                <strong>Fashion patches</strong> for denim and accessories
              </li>
            </ul>
          </div>

          <div className="relative mx-auto h-130 w-full max-w-140">
            <div className="absolute right-0 top-14 z-0 h-97.5 w-81.25 rounded-[18px] bg-[#C91A25]" />

            <img
              src="https://custompatchmakers.ca/wp-content/uploads/2025/10/Before-Slide-1_5fba9736-394a-48d9-a123-cbe3b71074fe.webp"
              alt="Custom patch sample"
              className="absolute bottom-0 left-0 z-10 h-107.5 w-107.5 rounded-[18px] object-cover shadow-[0_8px_24px_rgba(11,28,72,0.25)]"
            />

            <img
              src="https://custompatchmakers.ca/wp-content/uploads/2025/10/After-Slide-1.webp"
              alt="Patch closeup"
              className="absolute right-0 top-0 z-20 h-70 w-70 rounded-[18px] object-cover shadow-[0_8px_24px_rgba(11,28,72,0.25)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}