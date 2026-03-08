import Container from "../layout/container";

export default function HeroSection() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C91A25] sm:text-sm">
              Lorem Ipsum Dolor
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Lorem Ipsum Patch Manufacturing
            </h1>
            <p className="mt-4 max-w-155 text-sm leading-7 text-[#2B2B2B] sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan risus sed nibh tempus,
              in scelerisque lorem efficitur. Curabitur tristique sem et ante volutpat, vel fermentum nibh
              bibendum.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-md bg-[#C91A25] px-5 py-3 text-sm font-semibold text-[#FFFFFF] transition-colors hover:bg-[#0B1C48]">
                Start Order
              </button>
              <button className="rounded-md border border-[#0B1C48]/25 bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#0B1C48] transition-colors hover:border-[#C91A25] hover:text-[#C91A25]">
                View Catalog
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-140">
            <img
              src="https://via.placeholder.com/560x420"
              alt="Placeholder hero"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
