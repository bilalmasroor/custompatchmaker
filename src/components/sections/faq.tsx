"use client";

import { useState } from "react";
import Container from "../layout/container";

const faqItems = [
  {
    question: "Can I see a sample of my product before you make it?",
    answer:
      "Yes! Share your idea with us, and our expert designers will create a digital mock-up for free before finalizing your order.",
  },
  {
    question: "How much do custom patches cost?",
    answer:
      "Pricing depends on patch type, size, quantity, and complexity. Bulk orders receive significant per-unit savings. Request a free quote for exact pricing.",
  },
  {
    question: "What is the difference between iron-on, Velcro, and sew-on patches?",
    answer:
      "Iron-on: Easy to apply with heat, no sewing required. Velcro: Removable and reusable, ideal for uniforms. Sew-on: Permanent and durable, great for long-term use.",
  },
  {
    question: "What customization options do you offer for patches?",
    answer:
      "We offer embroidery, woven, PVC, chenille, and printed patches, with options for iron-on, Velcro, and sew-on backing. Choose from various shapes, sizes, and thread colors to match your vision. fancy.",
  },
  {
    question: "What if there’s an issue with my order?",
    answer:
      "Customer satisfaction is our top priority. If there’s a manufacturing issue, our team will work with you to resolve it promptly.",
  },
  {
    question: "How long does it take to receive my order?",
    answer:
      "We try to get our order to you as quickly as possible. Most orders ship out in about 7-10 business days, but it can vary depending on how busy we are. Just ask, and we’ll give you an estimated delivery time when you order.",
  },
];

function ArrowIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 320 512" aria-hidden="true" className="h-5 w-5 fill-current text-[#C91A25]">
      <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
    </svg>
  ) : (
    <svg viewBox="0 0 320 512" aria-hidden="true" className="h-5 w-5 fill-current text-[#C91A25]">
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto max-w-255">
          <div className="text-center">
            <h2 className="relative inline-block px-1 text-[28px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[32px] lg:text-[36px]">
              Frequently Asked Question
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#F2B705]"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="12" />
              </svg>
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article key={item.question} className="overflow-hidden rounded-md border border-[#0B1C48]/15 bg-[#FFFFFF]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-medium leading-[1.35] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
                      {item.question}
                    </span>
                    <ArrowIcon open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#0B1C48]/15 px-4 py-3 sm:px-5 sm:py-4">
                      <p className="text-[13px] leading-[1.55] text-[#2B2B2B] sm:text-[14px] lg:text-[15px]">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}