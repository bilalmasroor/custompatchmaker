"use client";

import { useMemo, useState } from "react";
import Container from "../layout/container";
import Image from "next/image";
import { motion } from "framer-motion";

type OptionCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type OptionTab = {
  key: "backing" | "materials" | "borders";
  label: string;
  description: string;
  cards: OptionCard[];
};

const optionTabs: OptionTab[] = [
  {
    key: "backing",
    label: "Backing Options",
    description: "We offer versatile backings to suit every purpose:",
    cards: [
      {
        title: "Sew on",
        description:
          "The classic choice for durable, permanent attachment to your favorite garments.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/No-Backings.webp",
        imageAlt: "Sew on patch backing",
      },
      {
        title: "Iron on",
        description:
          "Secure, long-lasting adhesion for easy application on a variety of fabrics.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/Iron-Ons.webp",
        imageAlt: "Iron on patch backing",
      },
      {
        title: "Peel and Stick",
        description:
          "The perfect temporary solution, offering affordable and convenient placement.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/Peel-and-Sticks-1.webp",
        imageAlt: "Peel and stick patch backing",
      },
      {
        title: "Velcro Backing",
        description:
          "Includes both hook and loop sides, offering maximum flexibility.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/Double-Velcros.webp",
        imageAlt: "Velcro backing material",
      },
    ],
  },
  {
    key: "materials",
    label: "Premium Base Materials",
    description:
      "Your design deserves a strong foundation, and we use only premium-grade fabrics.",
    cards: [
      {
        title: "Polyester Twill",
        description: "Smooth, durable, and ideal for everyday wear.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/advesivebacking.avif",
        imageAlt: "Polyester twill patch fabric",
      },
      {
        title: "Felt Fabric",
        description:
          "Soft with a premium texture, perfect for vintage or artistic designs.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/twil.avif",
        imageAlt: "Felt fabric patch base",
      },
    ],
  },
  {
    key: "borders",
    label: "Border Options",
    description: "Enhance your patch with borders that define its look.",
    cards: [
      {
        title: "Merrowed Edge",
        description:
          "A classic stitched edge for round or rectangular designs.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/Merrowed-Border.webp",
        imageAlt: "Merrowed edge patch border",
      },
      {
        title: "Heat Cut Edge",
        description: "Clean, precise trimming for a modern appearance.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/EMB-Border.webp",
        imageAlt: "Heat cut edge patch border",
      },
      {
        title: "Laser Cut Edge",
        description: "Perfect for detailed shapes and custom logos.",
        imageSrc:
          "https://custompatchmakers.ca/wp-content/uploads/2025/10/No-Border.webp",
        imageAlt: "Laser cut edge patch border",
      },
    ],
  },
];

const gridLayoutByCount: Record<number, string> = {
  2: "max-w-[560px] grid-cols-1 sm:grid-cols-2",
  3: "max-w-[840px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "max-w-[1080px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function ChenilleBackingBorderOptions() {
  const [activeTabKey, setActiveTabKey] = useState<OptionTab["key"]>("backing");

  const activeTab = useMemo(
    () => optionTabs.find((tab) => tab.key === activeTabKey) ?? optionTabs[0],
    [activeTabKey],
  );

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-[1080px]">
          {/* Eyebrow */}
          <div className="text-center">
            <div className="relative inline-block px-2">
              <h3 className="text-[28px] font-semibold tracking-wider leading-none text-[#0B1C48]">
                Chenille Finishing
              </h3>
              <motion.svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#C91A25]"
              >
                <motion.path
                  d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                  strokeWidth="12"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.6 }}
                />
              </motion.svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="my-6 text-center font-[var(--font-poppins)] text-[40px] font-medium leading-[1.2] text-[#0B1C48]">
            Backing and Border Options
          </h2>

          {/* Tabs */}
          <div
            className="mt-6 flex flex-wrap justify-center gap-0"
            role="tablist"
            aria-label="Backing and border options tabs"
          >
            {optionTabs.map((tab) => {
              const isActive = tab.key === activeTab.key;
              const tabId = `chenille-options-tab-${tab.key}`;
              const panelId = `chenille-options-panel-${tab.key}`;

              return (
                <button
                  key={tab.key}
                  id={tabId}
                  type="button"
                  onClick={() => setActiveTabKey(tab.key)}
                  className={`inline-flex min-h-[55px] items-center justify-center border px-6 text-center text-[16px] font-sans leading-none transition-colors sm:min-w-[180px] sm:text-[16px] ${
                    isActive
                      ? "border-[#5A1215] bg-[#7B1E23] text-white"
                      : "border-transparent text-[#7B0F14] hover:bg-[#F9FAFB]"
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-relaxed text-[#2B2B2B] sm:text-[16px]">
            {activeTab.description}
          </p>

          {/* Cards */}
          <div
            id={`chenille-options-panel-${activeTab.key}`}
            role="tabpanel"
            aria-labelledby={`chenille-options-tab-${activeTab.key}`}
            className={`mx-auto mt-8 grid gap-5 ${gridLayoutByCount[activeTab.cards.length]}`}
          >
            {activeTab.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl bg-white px-5 pb-6 pt-5 text-center"
              >
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h4 className="mt-4 text-[22px] font-semibold leading-tight text-[#0B1C48] sm:text-[22px]">
                  {card.title}
                </h4>

                <p className="mt-2 text-[12px] leading-relaxed text-[#555555] sm:text-[13px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
