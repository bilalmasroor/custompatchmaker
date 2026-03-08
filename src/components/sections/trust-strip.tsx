import Container from "../layout/container";

export default function TrustStrip() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#0B1C48] bg-[url('https://custompatchmakers.ca/wp-content/uploads/2025/10/Bg-Vector.webp')] bg-size-[460px_auto] bg-repeat py-7 sm:py-8">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="flex min-h-48 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-2.5 py-2 sm:min-h-52 sm:px-3.5 sm:py-3 lg:min-h-54 lg:px-4 lg:py-3.5">
            <div className="max-w-65">
              <h2 className="!text-[28px] font-semibold leading-[1.06] text-[#C91A25] sm:!text-[28px] lg:!text-[28px]">
                Customize Your
                <br />
                Perfect Patch
              </h2>
              <p className="mt-3 text-[22px] font-normal leading-[1.2] text-[#2B2B2B] sm:text-[23px] lg:text-[24px]">
                Any Shape, Any Backing
              </p>
            </div>

            <div className="relative h-32 w-48 shrink-0 sm:h-36 sm:w-52 lg:mr-1 lg:h-40 lg:w-56">
              <img
                src="/images/home/Customize-1.png"
                alt="Customize your patch"
                className="h-full w-full object-contain"
              />
            </div>
          </article>

          <article className="flex min-h-48 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-2.5 py-2 sm:min-h-52 sm:px-3.5 sm:py-3 lg:min-h-54 lg:px-4 lg:py-3.5">
            <div className="max-w-66.25">
              <h2 className="!text-[28px] font-semibold leading-[1.06] text-[#C91A25] sm:!text-[28px] lg:!text-[28px]">
                Design Your Own
                <br />
                Custom Patches
              </h2>
              <p className="mt-3 text-[22px] font-normal leading-[1.2] text-[#2B2B2B] sm:text-[23px] lg:text-[24px]">
                Unique, Creative, Durable
              </p>
            </div>

            <div className="relative h-32 w-48 shrink-0 sm:h-36 sm:w-52 lg:mr-1 lg:h-40 lg:w-56">
              <img
                src="/images/home/Customize-2.png"
                alt="Design your custom patches"
                className="h-full w-full object-contain"
              />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
