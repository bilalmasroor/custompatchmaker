"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/container";

const steps = [
  {
    title: "Submit your design",
    description:
      "Upload your designs, logos, or even a rough sketch. Choose your product, colors, size, and style to bring your ideas to life.",
    image: "/images/home/order1.png",
  },
  {
    title: "Approve Your Proof",
    description:
      "Collaboration is key: Our designers will create a digital proof. Tell us what you think, and we'll work together until you love it.",
    image: "/images/home/order2.png",
  },
  {
    title: "The Wait is Almost Over",
    description:
      "With your approval in hand, our production team will meticulously bring your custom product to life.",
    image: "/images/home/order3.png",
  },
  {
    title: "Unbox and Enjoy",
    description:
      "The moment you've been waiting for has arrived! We'll deliver your top-notch custom product to you in no time, free of charge.",
    image: "/images/home/order4.png",
  },
];

export default function OrderProcess() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-14 lg:py-16">
      <Container>
        <motion.div
          className="mx-auto max-w-245 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[24px] font-semibold leading-none text-[#0B1C48] sm:text-[30px]">Order Process</h2>
          <p className="mt-4 text-[12px] font-normal leading-normal text-[#2B2B2B] sm:text-[13px]">
            One Click to Elevate Your Style – Order Now!
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-245 grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.12,
              }}
            >
              <Image
                src={step.image}
                alt=""
                width={200}
                height={200}
                className="mx-auto h-50 w-50 object-contain sm:h-50 sm:w-50 lg:h-50 lg:w-40"
              />
              <h4 className="mt-6 text-[14px] font-semibold leading-[1.2] text-[#0b1c48] sm:text-[20px]">{step.title}</h4>
              <p className="mx-auto mt-3 max-w-66.25 text-[11px] leading-[1.45] text-[#2B2B2B] sm:text-[12px]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
