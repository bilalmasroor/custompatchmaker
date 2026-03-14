"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import Image from "next/image";

type CoverageItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const coverageItems: CoverageItem[] = [
  {
    title: "50% Coverage",
    description:
      "Ideal for clean, simple designs with balanced fabric visibility, affordable and stylish.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/10/50-percent.avif",
    imageAlt: "50 percent patch coverage sample",
  },
  {
    title: "75% Coverage",
    description:
      "Our most popular choice, offering rich texture and vibrant colour without extra weight. Perfect for logos and crests.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/10/75-percent.avif",
    imageAlt: "75 percent patch coverage sample",
  },
  {
    title: "100% Coverage",
    description:
      "For bold, full-colour artwork. Every detail is covered with precision stitching for a professional finish.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/10/100-percent.avif",
    imageAlt: "100 percent patch coverage sample",
  },
];

export default function PatchCoverageStyles() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="relative inline-block px-2">
            <h3 className="text-[28px] font-semibold tracking-wider leading-none text-[#C91A25]">
              Coverage Options
            </h3>
            <motion.svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#C91A25]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            >
              <motion.path
                d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                strokeWidth="12"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.svg>
          </div>

          <h2 className="mt-4 text-[32px] font-medium leading-[1.2] text-[#0B1C48] sm:text-[32px]">
            Custom Patch Styles for Every Purpose
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-relaxed text-[#2B2B2B] sm:text-[15px]">
            Choose how much stitching coverage fits your design and budget.
          </p>

          <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 md:grid-cols-3">
            {coverageItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C91A25]/30 hover:shadow-xl sm:p-8"
              >
                <div className="relative mb-6 block shrink-0 overflow-hidden rounded-xl p-1.5 transition-colors duration-300 group-hover:border-[#C91A25]">
                  <Image
                    width={200}
                    height={200}
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="h-[180px] w-[180px] rounded-lg object-contain sm:h-[190px] sm:w-[190px]"
                  />
                </div>

                <h3 className="text-[20px] font-bold leading-tight text-[#0B1C48] sm:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[310px] text-[14px] leading-relaxed text-[#555555]">
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
