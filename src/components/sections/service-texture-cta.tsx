"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";

type ServiceTextureCtaSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: ReactNode[];
  buttonText: string;
  buttonHref: string;
  backgroundImageSrc: string;
};

export default function ServiceTextureCta({
  eyebrow,
  title,
  paragraphs,
  buttonText,
  buttonHref,
  backgroundImageSrc,
}: ServiceTextureCtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#0B1C48]/15 py-10 sm:py-12 lg:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="absolute inset-0 bg-[#0B1C48]/90" />

      <Container className="relative z-10 text-[#FFFFFF] [&_h2]:text-[#FFFFFF] [&_p]:text-[#FFFFFF] [&_strong]:text-[#FFFFFF]">
        <div className="mx-auto max-w-250 text-center text-[#FFFFFF]">
          <div className="relative inline-block px-2">
            <h3 className="text-[28px] font-semibold tracking-wider leading-none text-[#FFFFFF]">
              {eyebrow}
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

          <h2 className="mx-auto mt-4 max-w-[980px] font-[var(--font-poppins)] text-[40px] font-medium leading-[1.1] text-[#FFFFFF]">
            {title}
          </h2>

          <div className="mx-auto mt-4 max-w-200 space-y-4 text-[14px] leading-[1.55] text-[#FFFFFF] sm:text-[15px] lg:text-[16px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href={buttonHref}
            className="mt-[34px] inline-flex min-h-[42px] items-center justify-center rounded-md bg-[#C91A25] px-[28px] text-[15px] text-[#FFFFFF] transition-all duration-300 hover:bg-[#C91A25]/90"
          >
            {buttonText}
          </a>
        </div>
      </Container>
    </section>
  );
}
