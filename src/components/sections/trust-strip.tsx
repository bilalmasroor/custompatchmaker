"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/container";

export default function HighlightsStrip() {
  return (
    <section className="relative overflow-hidden border-b border-[#0B1C48]/15 py-7 sm:py-10">
      {/* Background and Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />
      <div className="absolute inset-0 bg-[#0B1C48]/90" />

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2">
          
          {/* Card 1 */}
          <motion.article
            // Overflow-hidden aur relative add kiya hai absolute image ke liye
            className="relative flex min-h-[140px] w-full items-center overflow-hidden rounded-lg bg-[#F4F6F8] px-6 py-6 sm:min-h-[160px] lg:px-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Text Container - Left side restricted to 60% width */}
            <div className="relative z-10 w-[60%] sm:w-[55%]">
              <h2 className="font-[var(--font-poppins)] text-[20px] font-semibold leading-tight text-[#0B1C48] sm:text-[24px]">
                Customize Your
                <br />
                Perfect Patch
              </h2>
              <p className="mt-2 text-[13px] font-medium leading-[1.3] text-[#0b1c48]/80 sm:text-[14px]">
                Any Shape, Any Backing
              </p>
            </div>

            {/* Image Container - Absolute positioned to the right to match the reference */}
            <div className="absolute right-[-2%] top-1/2 h-[120%] w-[50%] -translate-y-1/2 sm:right-2 sm:h-[130%] sm:w-[45%]">
              <Image
                src="/images/home/Customize-1.png"
                alt="Customize your patch"
                fill
                sizes="(min-width: 1024px) 250px, 200px"
                className="object-contain object-right drop-shadow-md"
              />
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            className="relative flex min-h-[140px] w-full items-center overflow-hidden rounded-lg bg-[#F4F6F8] px-6 py-6 sm:min-h-[160px] lg:px-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {/* Text Container */}
            <div className="relative z-10 w-[60%] sm:w-[55%]">
              <h2 className="font-[var(--font-poppins)] text-[20px] font-semibold leading-tight text-[#0B1C48] sm:text-[24px]">
                Design Your Own
                <br />
                Custom Patches
              </h2>
              <p className="mt-2 text-[13px] font-medium leading-[1.3] text-[#0b1c48]/80 sm:text-[14px]">
                Unique, Creative, Durable
              </p>
            </div>

            {/* Image Container */}
            <div className="absolute right-[-2%] top-1/2 h-[120%] w-[50%] -translate-y-1/2 sm:right-2 sm:h-[130%] sm:w-[45%]">
              <Image
                src="/images/home/Customize-2.png"
                alt="Design your custom patches"
                fill
                sizes="(min-width: 1024px) 250px, 200px"
                className="object-contain object-right drop-shadow-md"
              />
            </div>
          </motion.article>

        </div>
      </Container>
    </section>
  );
}