"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import Container from "../layout/container";

const features = [
  {
    label: "Plush Detailing",
    text: "Made with high-density yarns that create a rich, textured surface.",
  },
  {
    label: "Vivid Color Blends",
    text: "Bright, bold hues that retain their vibrancy even after repeated wear.",
  },
  {
    label: "Strong Backing Options",
    text: "Available with iron-on, sew-on, or adhesive finishes for easy application.",
  },
  {
    label: "Fully Customizable",
    text: "Ideal for varsity letters, mascots, and custom logo patches with 3D flair.",
  },
  {
    label: "Durability Meets Comfort",
    text: "Soft to the touch yet tough enough to withstand active use.",
  },
];

/* ── 3D tilt image ─────────────────────────────────────────── */
function TiltShowcaseImage() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  function handleMouse(e: ReactMouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-[460px] perspective-[800px]"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glow behind image */}
      <div className="absolute inset-8 -z-10 rounded-full bg-white/10 blur-3xl" />

      <motion.img
        src="https://custompatchmakers.ca/wp-content/uploads/2025/11/600px_X_750px-removebg-preview.png"
        alt="Custom chenille patch showcase"
        className="relative h-auto w-full object-contain drop-shadow-2xl"
        loading="lazy"
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
    </motion.div>
  );
}

/* ── Feature item ──────────────────────────────────────────── */
function FeatureItem({
  label,
  text,
  index,
}: {
  label: string;
  text: string;
  index: number;
}) {
  return (
    <motion.li
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
        <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        <strong className="text-white">{label}:</strong> {text}
      </span>
    </motion.li>
  );
}

/* ── Main section ──────────────────────────────────────────── */
export default function EmbroideredWhyChoose() {
  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/bg2.png")',
          }}
        />
        <div className="absolute inset-0 bg-[#0B1C48]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C48]/85 via-[#0B1C48]/78 to-[#0B1C48]/50" />
      </div>

      <Container>
        <div className="mx-auto grid max-w-280 grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-14">
          {/* Image with tilt */}
          <TiltShowcaseImage />

          {/* Content */}
          <div>
            <motion.h2
              className="font-[var(--font-poppins)] text-[40px] font-medium leading-[1.1] text-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Why Choose Our Custom
              <br />
              Chenille Patches?
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[560px] text-[15px] leading-[1.6] text-white/85 sm:text-[16px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              Soft, vibrant, and full of character our custom chenille patches
              bring life and dimension to every piece. Perfect for schools,
              sports teams, and fashion brands, here&apos;s what makes them
              stand out:
            </motion.p>

            <ul className="mt-5 space-y-3 text-[15px] leading-[1.55] text-white/85 sm:text-[16px]">
              {features.map((f, i) => (
                <FeatureItem
                  key={f.label}
                  label={f.label}
                  text={f.text}
                  index={i}
                />
              ))}
            </ul>

            <motion.p
              className="mt-5 max-w-[560px] text-[15px] leading-[1.6] text-white/85 sm:text-[16px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              Choose chenille patches that deliver both warmth and impact —
              perfect for making your brand or team identity unforgettable.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
