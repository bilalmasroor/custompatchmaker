import Container from "../layout/container";

export default function TrustStrip() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#0B1C48] bg-[url('https://custompatchmakers.ca/wp-content/uploads/2025/10/Bg-Vector.webp')] bg-size-[460px_auto] bg-repeat py-7 sm:py-8">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="flex min-h-60 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4.5">
            <div className="max-w-65">
              <h2 className="text-[42px] font-semibold leading-[1.04] text-[#C91A25] sm:text-[38px] lg:text-[42px]">
                Customize Your
                <br />
                Perfect Patch
              </h2>
              <p className="mt-4 text-[32px] font-normal leading-[1.2] text-[#2B2B2B] sm:text-[28px] lg:text-[32px]">
                Any Shape, Any Backing
              </p>
            </div>

            <div className="relative h-42.5 w-62.5 shrink-0 sm:h-47.5 sm:w-67.5 lg:mr-1 lg:h-52.25 lg:w-63.25">
              <img
                src="https://via.placeholder.com/150x88/ffffff/cb1f23?text=Patch+A"
                alt="Layered patch A"
                className="absolute top-21.5 left-16 z-20 h-22 w-37.5 rotate-[-7deg] rounded-md object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/90x72/f58220/ffffff?text=Patch+B"
                alt="Layered patch B"
                className="absolute top-12 left-7 z-30 h-18 w-22.5 rotate-[-18deg] rounded-full object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/108x42/2f78c4/ffffff?text=Patch+C"
                alt="Layered patch C"
                className="absolute top-11 left-24.5 z-40 h-10.5 w-27 rotate-[-8deg] rounded-md object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/82x64/ea6d25/ffffff?text=Patch+D"
                alt="Layered patch D"
                className="absolute top-17.5 left-42 z-30 h-16 w-20.5 rotate-13 rounded-2xl object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/76x76/fdf9f1/cb1f23?text=Patch+E"
                alt="Layered patch E"
                className="absolute top-0 left-20.5 z-50 h-19 w-19 rotate-13 rounded-full object-cover shadow-md"
              />
            </div>
          </article>

          <article className="flex min-h-60 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4.5">
            <div className="max-w-66.25">
              <h2 className="text-[42px] font-semibold leading-[1.04] text-[#C91A25] sm:text-[38px] lg:text-[42px]">
                Design Your Own
                <br />
                Custom Patches
              </h2>
              <p className="mt-4 text-[32px] font-normal leading-[1.2] text-[#2B2B2B] sm:text-[28px] lg:text-[32px]">
                Unique, Creative, Durable
              </p>
            </div>

            <div className="relative h-43 w-63.75 shrink-0 sm:h-47 sm:w-67.5 lg:mr-1 lg:h-51.75 lg:w-70.25">
              <img
                src="https://via.placeholder.com/108x72/1f87c8/ffffff?text=Patch+1"
                alt="Layered patch 1"
                className="absolute top-0 left-19 z-30 h-18 w-27 rotate-6 rounded-xl object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/98x74/2e4a9c/ffffff?text=Patch+2"
                alt="Layered patch 2"
                className="absolute top-0.5 left-41.5 z-40 h-18.5 w-24.5 rotate-8 rounded-xl object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/112x78/f2b705/0b1c48?text=Patch+3"
                alt="Layered patch 3"
                className="absolute top-19.5 left-17.5 z-50 h-19.5 w-28 rotate-[-18deg] rounded-xl object-cover shadow-md"
              />
              <img
                src="https://via.placeholder.com/128x80/235da8/ffffff?text=Patch+4"
                alt="Layered patch 4"
                className="absolute top-19.5 left-38 z-20 h-20 w-32 -rotate-6 rounded-xl object-cover shadow-md"
              />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
