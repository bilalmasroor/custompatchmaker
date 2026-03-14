"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/container";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Absolutely impressed with the quality! I ordered custom embroidered patches for our cycling team, and they turned out better than expected. Great communication and quick delivery too.",
    name: "Melissa R.",
    location: "Toronto, ON",
  },
  {
    quote:
      "Custom Patch Makers made the process so easy. I sent them a rough sketch, and their team transformed it into a professional design within days. The patches look sharp and durable, exactly what we needed.",
    name: "Daniel P.",
    location: "Calgary, AB",
  },
  {
    quote:
      "We ordered PVC patches for our outdoor gear brand, and they handled every detail perfectly. Excellent craftsmanship and colour accuracy will definitely order again!",
    name: "Sophie M.",
    location: "Vancouver, BC",
  },
  {
    quote:
      "From design to delivery, everything was smooth and professional. The iron-on patches were easy to apply and have held up perfectly after multiple washes.",
    name: "Jacob L.",
    location: "Winnipeg, MB",
  },
  {
    quote:
      "As a local club, we wanted something unique for our jackets, and Canadian Patch Maker nailed it. The team was helpful, friendly, and truly cared about getting every detail right.",
    name: "Ava C.",
    location: "Halifax, NS",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full w-full flex-col rounded-[10px] bg-[#F2F2F2] px-10 pb-8 pt-9">
      <Image
        width={100}
        height={100}
        src="https://custompatchmakers.ca/wp-content/uploads/2025/10/Group-269-1.png"
        alt="Quote"
        className="h-11.25 w-15.25 object-contain"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(5000%) hue-rotate(348deg) brightness(90%) contrast(100%)",
        }}
      />

      <p className="mt-5 text-[15px] italic leading-[1.45] text-[#1F1F1F]">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="mt-auto pt-8">
        <h3 className="text-[16px] font-semibold leading-none text-[#0b1c48]">
          {item.name}
        </h3>
        <p className="mt-2 text-[14px] leading-none text-[#6B6B6B]">
          {item.location}
        </p>
      </div>
    </article>
  );
}

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const getVisible = useCallback(
    (from: number) =>
      Array.from({ length: cardsPerView }, (_, i) => ({
        index: (from + i) % testimonials.length,
        item: testimonials[(from + i) % testimonials.length],
      })),
    [cardsPerView],
  );

  const onPrev = () => {
    setDirection(-1);
    setStartIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const onNext = () => {
    setDirection(1);
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  const visible = getVisible(startIndex);

  // Slide amount per card
  const slideX = 340;

  return (
    <section className="border-b border-[#d6d6d6] bg-[#E6E6E6] py-14 sm:py-16 lg:py-18">
      <Container>
        <div className="mx-auto max-w-285">
          <div className="text-center">
            <div className="relative inline-block px-2">
              <h3 className="text-[28px] font-semibold tracking-wider leading-none text-[#0B1C48]">
                What Our Customers Say
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
          </div>

          {/* Carousel */}
          <div className="relative mt-10 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                initial={(dir: number) => ({
                  x: dir >= 0 ? slideX : -slideX,
                  opacity: 0,
                })}
                animate={{ x: 0, opacity: 1 }}
                exit={(dir: number) => ({
                  x: dir >= 0 ? -slideX : slideX,
                  opacity: 0,
                })}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map(({ index, item }) => (
                  <div key={index} className="min-h-[380px] w-full max-w-90">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#991B1B] text-[#991B1B] transition-colors hover:bg-[#991B1B] hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#991B1B] text-[#991B1B] transition-colors hover:bg-[#991B1B] hover:text-white"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
