"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/container";

export default function HighlightsStrip() {
  return (
    <section className="relative overflow-hidden border-b border-[#0B1C48]/15 py-7 sm:py-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />
      <div className="absolute inset-0 bg-[#0B1C48]/90" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.article
            className="flex min-h-48 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-2.5 py-2 sm:min-h-52 sm:px-3.5 sm:py-3 lg:min-h-54 lg:px-4 lg:py-3.5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-65">
              <h2 className="text-[28px] font-semibold leading-[1.06] text-[#0b1c48]">
                Customize Your
                <br />
                Perfect Patch
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[1.2] text-[#0b1c48]">
                Any Shape, Any Backing
              </p>
            </div>

            <div className="relative h-32 w-48 shrink-0 sm:h-36 sm:w-52 lg:mr-1 lg:h-40 lg:w-56">
              <Image
                src="/images/home/Customize-1.png"
                alt="Customize your patch"
                fill
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 208px, 192px"
                className="object-contain"
              />
            </div>
          </motion.article>

          <motion.article
            className="flex min-h-48 items-center justify-between gap-3 rounded-md bg-[#F4F6F8] px-2.5 py-2 sm:min-h-52 sm:px-3.5 sm:py-3 lg:min-h-54 lg:px-4 lg:py-3.5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="max-w-66.25">
              <h2 className="text-[28px] font-semibold leading-[1.06] text-[#0b1c48]">
                Design Your Own
                <br />
                Custom Patches
              </h2>
              <p className="mt-3 text-[16px] font-normal leading-[1.2] text-[#0b1c48]">
                Unique, Creative, Durable
              </p>
            </div>

            <div className="relative h-32 w-48 shrink-0 sm:h-36 sm:w-52 lg:mr-1 lg:h-40 lg:w-56">
              <Image
                src="/images/home/Customize-2.png"
                alt="Design your custom patches"
                fill
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 208px, 192px"
                className="object-contain"
              />
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
