"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";

const heroSlides = [
  "https://custompatchmakers.ca/wp-content/uploads/2025/10/hero-section-slider-img-4.webp",
  "https://custompatchmakers.ca/wp-content/uploads/2025/10/hero-section-slider-img-1.png",
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#0B1C48] text-[#FFFFFF]">
      <div aria-hidden="true" className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url("${slide}")` }}
          />
        ))}

        <div className="absolute inset-0 bg-[#0B1C48]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C48]/90 via-[#0B1C48]/78 to-[#0B1C48]/30" />
      </div>

      <Container>
        <div className="relative grid min-h-[762px] items-center py-[48px] sm:py-[64px] lg:grid-cols-[minmax(0,720px)_1fr] lg:py-[80px]">
          <motion.div
            className="max-w-[720px]"
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
          >
            <h1 className="max-w-[700px] text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-[#FFFFFF] sm:text-[48px] md:text-[56px] lg:text-[64px]">
              Premium Custom Patches, Crafted to Perfection.
            </h1>

            <p className="mt-[24px] max-w-[690px] text-[16px] leading-[30px] text-[#F4F6F8] sm:text-[17px]">
              Transform your artwork into high-quality custom patches. From detailed embroidery to
              durable PVC, we deliver unmatched craftsmanship across Canada. Trusted by brands,
              military units, and creative teams.
            </p>

            <p className="mt-[18px] flex max-w-[690px] flex-wrap items-center gap-x-[18px] gap-y-[8px] text-[16px] leading-[30px] text-[#F4F6F8] sm:text-[17px]">
              <span className="inline-flex items-center gap-[8px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] text-[#FFFFFF]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M8 12.5L10.7 15.2L16.2 9.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Free Design Support</span>
              </span>

              <span className="inline-flex items-center gap-[8px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] text-[#FFFFFF]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M8 12.5L10.7 15.2L16.2 9.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Fast Turnaround</span>
              </span>

              <span className="inline-flex items-center gap-[8px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] text-[#FFFFFF]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M8 12.5L10.7 15.2L16.2 9.7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Premium Quality</span>
              </span>
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[16px]">
              <a
                href="https://wa.me/14372923019"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C91A25] px-[30px] text-[15px] font-semibold text-[#FFFFFF] transition-all duration-300 hover:bg-[#C91A25]/90"
              >
                Call Us Today
              </a>

              <a
                href="#get-a-free-quote"
                style={{ color: "#FFFFFF" }}
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#FFFFFF]/60 bg-[#FFFFFF]/10 px-[30px] text-[15px] font-semibold text-[#FFFFFF] backdrop-blur-sm transition-all duration-300 hover:bg-[#FFFFFF]/20 hover:text-[#FFFFFF]"
              >
                Get A Free Quote
              </a>
            </div>

            <a
              href="https://www.trustpilot.com/review/custompatchmakers.ca"
              target="_blank"
              rel="noreferrer"
              className="mt-[32px] inline-flex"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://custompatchmakers.ca/wp-content/uploads/2026/02/368-3686309_5-star-customer-feedback-trustpilot-logo-hd-png-removebg-preview.png"
                alt="Trustpilot 5-star rating"
                loading="lazy"
                className="h-auto w-[210px] sm:w-[240px] md:w-[268px]"
              />
            </a>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}