import Container from "../layout/container";

const patchCards = [
  {
    title: "Embroidered Patches",
    description: "If you want something strong and sturdy but with a 3D design, then go for our PVC emblems",
    href: "/embroidered-patches/",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/8.webp",
    alt: "Embroidered Patches",
  },
  {
    title: "Iron-On Patches",
    description: "Quick application, ideal for clothing and accessories",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/3-1.webp",
    alt: "Iron-on Patches",
  },
  {
    title: "Military Patches",
    description: "Crafted to honour courage, unity, and the proud legacy of those who serve.",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/images-1.jpg",
    alt: "Military Patches",
  },
  {
    title: "Woven Patches",
    description: "Detailed, lightweight, and great for intricate designs",
    href: "/woven-patches/",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Woven-Patch.webp",
    alt: "Woven Patches",
  },
  {
    title: "Chenille Patches",
    description: "Soft, textured, and often used for varsity jackets or letterman styles",
    href: "/chenille-patches/",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Chenille-patches.avif",
    alt: "Chenille Patches",
  },
  {
    title: "Leather Patches",
    description: "Stylish and premium, great for hats, bags, or denim",
    href: "#",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Leather-patches.webp",
    alt: "Leather Patches",
  },
  {
    title: "PVC Patches",
    description: "Weather-resistant, flexible, and perfect for tactical or outdoor gear",
    href: "#",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/PVC-patches-1.webp",
    alt: "PVC Patches",
  },
  {
    title: "Velcro-Backed Patches",
    description: "Easy to attach, remove, and reuse",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Velcro-backed-patches.jpg",
    alt: "Velcro-Backed Patches",
  },
  {
    title: "Sublimated Patches",
    description: "Full-color detail for creative or promotional projects",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Sublimated-patches.jpg",
    alt: "Sublimated Patches",
  },
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-10 sm:py-12">
      <Container>
        <div className="mx-auto mb-9 max-w-245 text-center">
          <div className="relative inline-block px-2">
            <h3 className="text-[13px] font-semibold leading-none text-[#C91A25]">Type of Patches Available!</h3>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="mt-1 h-2.25 w-full fill-none stroke-[#F2B705]"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="16" />
            </svg>
          </div>

          <h2 className="mt-2 text-[33px] font-semibold leading-[1.15] text-[#0B1C48] sm:text-[35px]">
            Design Your Own Custom Patches – Fast, Reliable, and High-Quality
          </h2>

          <p className="mx-auto mt-3 max-w-245 text-[12px] leading-normal text-[#2B2B2B] sm:text-[13px]">
            From cycling and running teams to military units, organizations, and clubs, <strong>Custom Patch Makers</strong> has
            created custom designs to fit every purpose and style. Our collection includes <strong>custom embroidered
            patches</strong> for detailed artwork, <strong>iron-on patches</strong> for quick application, and <strong>Velcro patches</strong> for
            versatile use. Whatever your idea, we craft each patch with care, quality, and precision to ensure it stands
            out and lasts.
          </p>
        </div>

        <div className="mx-auto grid max-w-245 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {patchCards.map((patch) => (
            <article
              key={patch.title}
              className="flex aspect-square w-full flex-col items-center justify-center rounded-xs border border-[#0B1C48]/15 bg-[#FFFFFF] px-5 pb-7 pt-6 text-center sm:px-6 sm:pb-8 sm:pt-7"
            >
              <a href={patch.href ?? "#"} className="inline-block" aria-label={patch.title}>
                <img
                  src={patch.image}
                  alt={patch.alt}
                  className="h-[172px] w-[172px] border border-[#C91A25] object-cover p-0.5 sm:h-[192px] sm:w-[192px]"
                />
              </a>

              <h3 className="mt-5 text-[27px] font-semibold leading-[1.2] text-[#0B1C48]">
                <a href={patch.href ?? "#"}>{patch.title}</a>
              </h3>
              <p className="mt-3 max-w-[300px] text-[12px] leading-[1.45] text-[#2B2B2B]">{patch.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
