import Container from "../layout/container";

export default function CollectionSection() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto max-w-255">
          <img
            src="/images/home/Cantfind.png"
            alt="Can't find patch design"
            className="mx-auto h-auto w-full max-w-200 object-contain"
          />

          <div className="mt-6 grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
            <div className="lg:pr-6">
              <h2 className="font-[var(--font-poppins)] text-[40px] font-medium leading-[1.06] text-[#0B1C48]">
                Customized Patches for Every Style, Explore Our Collection
              </h2>

              <div className="mt-5 space-y-4 text-[14px] leading-[1.45] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
                <p>
                  Discover the creativity and craftsmanship that define{" "}
                  <a href="#" className="font-semibold text-[#0B1C48]">
                    Custom Patch Makers
                  </a>
                  . Our gallery showcases a wide range of designs, from detailed military insignias and sports team
                  emblems to sleek corporate logos and expressive fashion patches.
                </p>
                <p>
                  Each patch tells a story, of pride, belonging, and identity. Whether you’re part of a club,
                  business, or creative community, we turn your ideas into professional-quality designs that last.
                </p>
                <p>
                  Take a look through our collection for inspiration, or send us your own concept. Whatever your style,
                  we’ll help you transform it into a patch that truly stands out.
                </p>
              </div>
            </div>

            <div className="lg:border-l lg:border-[#C91A25] lg:pl-7">
              <h2 className="font-[var(--font-poppins)] text-[40px] font-medium leading-[1.06] text-[#0B1C48]">
                Can’t Find the Right Product?
              </h2>

              <div className="mt-5 space-y-4 text-[14px] leading-[1.45] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
                <p>
                  Looking for something truly one-of-a-kind? You’re in the right place. At{" "}
                  <a href="#" className="font-semibold text-[#0B1C48]">
                    Custom Patch Makers
                  </a>
                  , we know that sometimes your idea doesn’t fit the standard mould, and that’s exactly where we
                  shine.
                </p>
                <p>
                  Maybe you have a unique shape in mind, a bold colour combination, or need a patch that can handle
                  extreme conditions. Whatever your challenge, our creative team is ready to make it happen. We love
                  turning unconventional ideas into real, wearable art.
                </p>
                <p>
                  So, if you don’t see exactly what you’re looking for in our collection, don’t stop there, reach out
                  to us! Let’s collaborate and bring your vision to life with a design that’s completely your own.
                </p>
                <p className="font-semibold text-[#0B1C48]">
                  At Custom Patch Makers, creativity knows no limits, just great craftsmanship and a touch of Canadian
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}