"use client";

import { useMemo, useState } from "react";
import Container from "../layout/container";

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
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/No-Backings.webp",
        imageAlt: "Sew on patch backing",
      },
      {
        title: "Iron on",
        description: "Secure, long-lasting adhesion for easy application on a variety of fabrics.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Iron-Ons.webp",
        imageAlt: "Iron on patch backing",
      },
      {
        title: "Peel and Stick",
        description: "The perfect temporary solution, offering affordable and convenient placement.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Peel-and-Sticks-1.webp",
        imageAlt: "Peel and stick patch backing",
      },
      {
        title: "Velcro Backing",
        description: "Includes both hook and loop sides, offering maximum flexibility.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Double-Velcros.webp",
        imageAlt: "Velcro backing material",
      },
    ],
  },
  {
    key: "materials",
    label: "Premium Base Materials",
    description: "Your design deserves a strong foundation, and we use only premium-grade fabrics.",
    cards: [
      {
        title: "Polyester Twill",
        description: "Smooth, durable, and ideal for everyday wear.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/advesivebacking.avif",
        imageAlt: "Polyester twill patch fabric",
      },
      {
        title: "Felt Fabric",
        description: "Soft with a premium texture, perfect for vintage or artistic designs.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/twil.avif",
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
        description: "A classic stitched edge for round or rectangular designs.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/Merrowed-Border.webp",
        imageAlt: "Merrowed edge patch border",
      },
      {
        title: "Heat Cut Edge",
        description: "Clean, precise trimming for a modern appearance.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/EMB-Border.webp",
        imageAlt: "Heat cut edge patch border",
      },
      {
        title: "Laser Cut Edge",
        description: "Perfect for detailed shapes and custom logos.",
        imageSrc: "https://custompatchmakers.ca/wp-content/uploads/2025/10/No-Border.webp",
        imageAlt: "Laser cut edge patch border",
      },
    ],
  },
];

const gridLayoutByCount: Record<number, string> = {
  2: "max-w-[620px] grid-cols-1 sm:grid-cols-2",
  3: "max-w-[930px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "max-w-[1080px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function ChenilleBackingBorderOptions() {
  const [activeTabKey, setActiveTabKey] = useState<OptionTab["key"]>("backing");

  const activeTab = useMemo(
    () => optionTabs.find((tab) => tab.key === activeTabKey) ?? optionTabs[0],
    [activeTabKey],
  );

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <div className="relative inline-block px-2">
              <h3 className="text-[14px] font-semibold tracking-wider uppercase leading-none text-[#C91A25]">
                Chenille Finishing
              </h3>
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="mt-1 h-2.5 w-full fill-none stroke-[#F2B705]"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="16" />
              </svg>
            </div>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.2] text-[#0B1C48] sm:text-[40px]">
              Backing and Border Options
            </h2>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-[10px]" role="tablist" aria-label="Backing and border options tabs">
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
                  className={`inline-flex min-h-[54px] min-w-[180px] items-center justify-center rounded-full border px-[24px] text-center text-[15px] font-semibold leading-none transition-colors sm:min-w-[220px] ${
                    isActive
                      ? "border-[#C91A25] bg-[#C91A25] text-[#FFFFFF]"
                      : "border-[#0B1C48]/15 bg-[#FFFFFF] text-[#0B1C48] hover:border-[#C91A25]/30 hover:text-[#C91A25]"
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

          <p className="mx-auto mt-6 max-w-3xl text-center text-[14px] leading-relaxed text-[#2B2B2B] sm:text-[15px]">
            {activeTab.description}
          </p>

          <div
            id={`chenille-options-panel-${activeTab.key}`}
            role="tabpanel"
            aria-labelledby={`chenille-options-tab-${activeTab.key}`}
            className={`mx-auto mt-10 grid gap-5 ${gridLayoutByCount[activeTab.cards.length]}`}
          >
            {activeTab.cards.map((card) => (
              <article key={card.title} className="group min-h-[430px] rounded-2xl border border-[#0B1C48]/10 bg-[#FFFFFF] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C91A25]/30 hover:shadow-xl">
                <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-xl border border-[#C91A25]/20 bg-[#FFFFFF] p-2">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-5 text-[22px] font-bold leading-tight text-[#0B1C48] sm:text-[24px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#555555]">
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
