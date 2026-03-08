import Container from "../layout/container";

type StyleItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
};

const styleItems: StyleItem[] = [
  {
    title: "Biker & Motorcycle Patches",
    description:
      "Ride in style with bold, durable biker patches built to handle any road or weather condition.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/3670051.png",
    imageAlt: "Biker embroidered patch",
    imageLeft: true,
  },
  {
    title: "Military & Tactical Patches",
    description:
      "Show pride and precision with military patches that capture every insignia, rank, and emblem with sharp detailing.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/11/1350px_X_700-removebg-preview.png",
    imageAlt: "Military embroidered patch",
    imageLeft: false,
  },
  {
    title: "Sports & Team Patches",
    description:
      "Celebrate victories, represent your club, and boost team identity with embroidered sports patches designed for performance wear.",
    imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/11/600px_X_750px-removebg-preview.png",
    imageAlt: "Sports embroidered patch",
    imageLeft: true,
  },
];

function StarOfLifeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 480 512" className="h-9 w-9 fill-current text-[#E31B23]">
      <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z" />
    </svg>
  );
}

type StyleRowProps = {
  item: StyleItem;
};

type EmbroideredVersatileOptionsSectionProps = {
  imageOverrides?: string[];
};

function StyleRow({ item }: StyleRowProps) {
  const imageBlock = (
    <div className="flex items-center justify-center">
      <img src={item.imageSrc} alt={item.imageAlt} className="h-auto max-h-72 w-auto object-contain" />
    </div>
  );

  const cardBlock = (
    <article className="w-full rounded-[20px] border border-[#5A5A5A]/70 bg-[#F4F6F8] px-8 py-9 lg:px-10 lg:py-10">
      <StarOfLifeIcon />
      <h3 className="mt-4 text-[34px] font-semibold leading-[1.2] text-[#7B0F14] sm:text-[42px]">
        {item.title}
      </h3>
      <p className="mt-4 max-w-130 text-[18px] leading-[1.5] text-[#111111] sm:text-[20px]">{item.description}</p>
    </article>
  );

  return (
    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-[#E31B23] lg:block" />
      {item.imageLeft ? (
        <>
          {imageBlock}
          {cardBlock}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[#E31B23] lg:block" />
        </>
      ) : (
        <>
          {cardBlock}
          {imageBlock}
          <div className="pointer-events-none absolute right-1/2 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[#E31B23] lg:block" />
        </>
      )}
    </div>
  );
}

export default function EmbroideredVersatileOptionsSection({
  imageOverrides,
}: EmbroideredVersatileOptionsSectionProps) {
  const resolvedStyleItems = styleItems.map((item, index) => ({
    ...item,
    imageSrc: imageOverrides?.[index] ?? item.imageSrc,
  }));

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#ECECEC] py-12 sm:py-14 lg:py-20">
      <Container>
        <div className="mx-auto max-w-285">
          <div className="text-center">
            <h3 className="relative inline-block px-1 text-[41px] font-semibold leading-none text-[#E31B23] sm:text-[44px]">
              Versatile Options
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#C91A25]"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="12" />
              </svg>
            </h3>

            <h2 className="mt-6 text-[54px] font-semibold leading-[1.15] text-[#7B0F14] sm:text-[58px]">
              Custom Patch Styles for Every Purpose
            </h2>

            <p className="mx-auto mt-3 max-w-250 text-[17px] leading-[1.45] text-[#111111] sm:text-[18px]">
              We create embroidered patches for a wide range of needs, each one stitched with care and made to perform.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-280 space-y-10 lg:space-y-14">
            <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] -translate-x-1/2 border-l-2 border-dotted border-[#E31B23] lg:block" />

            {resolvedStyleItems.map((item) => (
              <StyleRow key={item.title} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
