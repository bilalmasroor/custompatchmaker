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

export default function ChenilleBackingBorderOptionsSection() {
  const [activeTabKey, setActiveTabKey] = useState<OptionTab["key"]>("backing");

  const activeTab = useMemo(
    () => optionTabs.find((tab) => tab.key === activeTabKey) ?? optionTabs[0],
    [activeTabKey],
  );

  return (
    <section className="border-b border-[#D9D9D9] bg-[#ECECEC] py-14 sm:py-16 lg:py-[82px]">
      <Container>
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-center text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#7B0F14] sm:text-[42px] lg:text-[48px]">
            Backing and Border Options
          </h2>

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
                  className={`inline-flex h-[56px] min-w-[200px] items-center justify-center border px-6 text-center text-[19px] leading-none transition-colors sm:min-w-[240px] ${
                    isActive
                      ? "border-[#97090E] bg-[#97090E] font-semibold text-[#FFFFFF]"
                      : "border-[#E3E3E3] bg-[#ECECEC] font-normal text-[#DF121D] hover:bg-[#F2F2F2]"
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

          <p className="mx-auto mt-8 max-w-[860px] text-center text-[21px] leading-[1.35] text-[#1F1F1F] sm:text-[24px]">
            {activeTab.description}
          </p>

          <div
            id={`chenille-options-panel-${activeTab.key}`}
            role="tabpanel"
            aria-labelledby={`chenille-options-tab-${activeTab.key}`}
            className={`mx-auto mt-10 grid gap-5 ${gridLayoutByCount[activeTab.cards.length]}`}
          >
            {activeTab.cards.map((card) => (
              <article key={card.title} className="min-h-[430px] bg-[#F2F2F2] p-[16px] pb-[14px]">
                <div className="mx-auto aspect-square w-full max-w-[220px] overflow-hidden bg-[#F2F2F2]">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-[14px] text-center text-[22px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#7B0F14] sm:text-[30px]">
                  {card.title}
                </h3>

                <p className="mt-[10px] text-center text-[17px] leading-[1.42] text-[#272727] sm:text-[20px]">
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
