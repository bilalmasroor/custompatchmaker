import Container from "../layout/container";

type CoverageItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const coverageItems: CoverageItem[] = [
  {
    title: "50% Coverage",
    description: "Ideal for clean, simple designs with balanced fabric visibility, affordable and stylish.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/50-percent.avif",
    imageAlt: "50 percent patch coverage sample",
  },
  {
    title: "75% Coverage",
    description:
      "Our most popular choice, offering rich texture and vibrant colour without extra weight. Perfect for logos and crests.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/75-percent.avif",
    imageAlt: "75 percent patch coverage sample",
  },
  {
    title: "100% Coverage",
    description:
      "For bold, full-colour artwork. Every detail is covered with precision stitching for a professional finish.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/100-percent.avif",
    imageAlt: "100 percent patch coverage sample",
  },
];

export default function PatchCoverageStylesSection() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#ECECEC] py-12 sm:py-14 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.16] text-[#7B0F14] sm:text-[48px] lg:text-[56px]">
            Custom Patch Styles for Every Purpose
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-[1.45] text-[#111111] sm:text-[18px]">
            Choose how much stitching coverage fits your design and budget.
          </p>

          <div className="mx-auto mt-12 grid max-w-[1040px] gap-10 md:grid-cols-3 md:gap-8 lg:mt-14">
            {coverageItems.map((item) => (
              <article key={item.title} className="flex flex-col items-center text-center">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-[200px] w-[200px] object-contain"
                />

                <h3 className="mt-6 text-[36px] font-semibold leading-[1.2] text-[#7B0F14] sm:text-[42px] lg:text-[53px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[310px] text-[17px] leading-[1.5] text-[#111111] sm:text-[18px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}