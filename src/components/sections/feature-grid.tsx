"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function PatchTypes() {
  const getCardDirection = (index: number) => {
    if (index % 3 === 0) return "left";
    if (index % 3 === 2) return "right";
    return "none";
  };

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-16 overflow-hidden">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="relative inline-block px-2">
            <span className="text-[14px] font-semibold tracking-wider uppercase leading-none text-[#0b1c48]">
              Type of Patches Available!
            </span>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="mt-1 h-2.5 w-full fill-none stroke-[#F2B705]"
            >
              <path
                d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                strokeWidth="16"
              />
            </svg>
          </div>

          <h2 className="mt-4 text-[32px] font-bold leading-[1.2] text-[#0B1C48] sm:text-[40px]">
            Design Your Own Custom Patches – Fast, Reliable, and High-Quality
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-relaxed text-[#2B2B2B] sm:text-[15px]">
            From cycling and running teams to military units, organizations, and clubs, <strong>Custom Patch Makers</strong> has
            created custom designs to fit every purpose and style. Our collection includes <strong>custom embroidered
            patches</strong> for detailed artwork, <strong>iron-on patches</strong> for quick application, and <strong>Velcro patches</strong> for
            versatile use. Whatever your idea, we craft each patch with care, quality, and precision to ensure it stands
            out and lasts.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {patchCards.map((patch, index) => {
            const direction = getCardDirection(index);

            const CardUI = () => (
              <article className="group flex h-full w-full flex-col items-center rounded-2xl border border-[#0B1C48]/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C91A25]/30 hover:shadow-xl sm:p-8">
                <a
                  href={patch.href ?? "#"}
                  className="relative mb-6 block shrink-0 overflow-hidden rounded-xl border border-[#C91A25]/20 p-1.5 transition-colors duration-300 group-hover:border-[#C91A25]"
                  aria-label={patch.title}
                >
                  <Image
                    src={patch.image}
                    alt={patch.alt}
                    width={192}
                    height={192}
                    className="h-44 w-44 rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-48"
                  />
                </a>

                <div className="flex flex-1 flex-col justify-start">
                  <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#0B1C48] sm:text-[24px]">
                    <a href={patch.href ?? "#"} className="transition-colors group-hover:text-[#C91A25]">
                      {patch.title}
                    </a>
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#555555]">
                    {patch.description}
                  </p>
                </div>
              </article>
            );

            return (
              <motion.div
                key={patch.title}
                initial={{
                  opacity: 0,
                  x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
                  y: direction === "none" ? 20 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: Math.floor(index / 3) * 0.15,
                }}
                className="h-full"
              >
                <CardUI />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}