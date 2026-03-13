"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "../layout/container";

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

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
      <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
}

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0);
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

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: cardsPerView }, (_, index) => {
      return testimonials[(startIndex + index) % testimonials.length];
    });
  }, [cardsPerView, startIndex]);

  const onPrev = () => {
    setStartIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const onNext = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="border-b border-[#d6d6d6] bg-[#E6E6E6] py-14 sm:py-16 lg:py-18">
      <Container>
        <div className="mx-auto max-w-285">
          <div className="text-center">
            <h2 className="relative inline-block px-1 text-[36px] font-semibold leading-none text-[#0b1c48] sm:text-[42px] lg:text-[48px]">
              What Our Customers Say
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#C91A25]"
              >
                <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="12" />
              </svg>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 justify-items-center gap-2.5 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="flex min-h-102 w-full max-w-90 flex-col rounded-[10px] bg-[#F2F2F2] px-10 pb-8 pt-9"
              >
                <img
                  src="https://custompatchmakers.ca/wp-content/uploads/2025/10/Group-269-1.png"
                  alt="Quote"
                  className="h-11.25 w-15.25 object-contain"
                />

                <p className="mt-5 text-[15px] italic leading-[1.45] text-[#1F1F1F]">
                  “{item.quote}”
                </p>

                <div className="mt-auto pt-8">
                  <h3 className="text-[16px] font-semibold leading-none text-[#0b1c48]">{item.name}</h3>
                  <p className="mt-2 text-[14px] leading-none text-[#6B6B6B]">{item.location}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1c48] text-[#C91A25] transition-colors hover:bg-[#C91A25] hover:text-[#FFFFFF]"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0b1c48] text-[#C91A25] transition-colors hover:bg-[#C91A25] hover:text-[#FFFFFF]"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
