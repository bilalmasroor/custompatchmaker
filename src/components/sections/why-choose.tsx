"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/container";

export default function WhyChoose() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto grid max-w-268 grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,502px)_minmax(0,1fr)] md:gap-8 lg:gap-10">
          <div className="mx-auto w-full max-w-125.5 md:mx-0">
            <Image
              src="/images/home/Jacket.png"
              alt="Why Choose Custom Patch Makers?"
              width={750}
              height={651}
              className="h-auto w-full object-cover"
            />
          </div>

          <motion.div
            className="w-full max-w-177.5 pt-2"
            initial={{ opacity: 0, x: -72 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 2.3, ease: [0.12, 0.9, 0.25, 1] }}
          >
            <h2 className="text-[32px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[38px] lg:text-[50px]">
              Why Choose Custom
              <br />
              Patch Makers?
            </h2>

            <p className="mt-5 text-[14px] leading-[1.45] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
              We’ve spent years perfecting the art of patch making. Our team combines skilled craftsmanship with modern
              techniques to produce <strong>woven, PVC, chenille, Velcro,</strong> and{" "}
              <a href="#" className="font-semibold text-[#0B1C48]">
                embroidered patches
              </a>{" "}
              that look sharp and hold up over time. Whether you need a small batch or a large order, we make sure every
              patch meets the same high standards.
            </p>

            <p className="mt-4 text-[14px] leading-[1.35] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">We’re proud to offer:</p>

            <ul className="mt-3 list-disc space-y-1.5 pl-7 text-[14px] leading-[1.35] text-[#2B2B2B] marker:text-[#F2B705] sm:text-[15px] lg:text-[16px]">
              <li>Reliable service and straightforward communication</li>
              <li>Premium materials with durable finishes</li>
              <li>Fast delivery anywhere in Canada</li>
              <li>Free quotes and fair, transparent pricing</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}