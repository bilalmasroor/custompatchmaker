"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Container from "../layout/container";

type StyleItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
};

const styleItems: StyleItem[] = [
  {
    title: "Biker & Motorcycle Patches",
    description:
      "Ride in style with bold, durable biker patches built to handle any road or weather condition.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/10/3670051.png",
    imageAlt: "Biker embroidered patch",
    imageLeft: true,
  },
  {
    title: "Military & Tactical Patches",
    description:
      "Show pride and precision with military patches that capture every insignia, rank, and emblem with sharp detailing.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/11/1350px_X_700-removebg-preview.png",
    imageAlt: "Military embroidered patch",
    imageLeft: false,
  },
  {
    title: "Sports & Team Patches",
    description:
      "Celebrate victories, represent your club, and boost team identity with embroidered sports patches designed for performance wear.",
    imageSrc:
      "https://custompatchmakers.ca/wp-content/uploads/2025/11/600px_X_750px-removebg-preview.png",
    imageAlt: "Sports embroidered patch",
    imageLeft: true,
  },
];

function StarOfLifeIcon({ active }: { active?: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 480 512"
      className="h-9 w-9 fill-current text-[#E31B23]"
      animate={active ? { rotate: 90, scale: 1.2 } : { rotate: 0, scale: 1 }}
      whileHover={{ rotate: 90, scale: 1.2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <path d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z" />
    </motion.svg>
  );
}

type EmbroideredVersatileOptionsSectionProps = {
  imageOverrides?: string[];
};

/* ── 3D tilt image ─────────────────────────────────────────── */
function TiltImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
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
    <div
      ref={ref}
      className="flex items-center justify-center perspective-[800px]"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Image
          width={1000}
          height={1000}
          src={src}
          alt={alt}
          className="h-auto max-h-72 w-80 object-contain drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}

/* ── Style row ─────────────────────────────────────────────── */
function StyleRow({
  item,
  dotRef,
  active,
}: {
  item: StyleItem;
  dotRef?: (el: HTMLDivElement | null) => void;
  active?: boolean;
}) {
  const imageBlock = <TiltImage src={item.imageSrc} alt={item.imageAlt} />;

  const cardBlock = (
    <motion.article
      className="group relative z-10 w-full cursor-default rounded-[20px] border border-[#5A5A5A]/40 bg-[#F4F6F8] px-8 py-9 transition-colors duration-300 hover:border-[#E31B23]/50 hover:bg-white lg:px-10 lg:py-10"
      animate={
        active
          ? {
              y: -6,
              boxShadow: "0 20px 40px rgba(227,27,35,0.1)",
              borderColor: "rgba(227,27,35,0.5)",
              backgroundColor: "#ffffff",
            }
          : {
              y: 0,
              boxShadow: "0 0px 0px rgba(227,27,35,0)",
              borderColor: "rgba(90,90,90,0.4)",
              backgroundColor: "#F4F6F8",
            }
      }
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(227,27,35,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <StarOfLifeIcon active={active} />
      <h4
        className={`mt-4 text-[22px] font-semibold leading-[1.2] transition-colors duration-300 group-hover:text-[#E31B23] sm:text-[24px] ${
          active ? "text-[#E31B23]" : "text-[#7B0F14]"
        }`}
      >
        {item.title}
      </h4>
      <p className="mt-4 max-w-130 text-[18px] leading-normal text-[#111111] sm:text-[16px]">
        {item.description}
      </p>
    </motion.article>
  );

  return (
    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* invisible dot anchor for beam measurement */}
      <div
        ref={dotRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-0 w-0 -translate-x-1/2 -translate-y-1/2"
      />

      {item.imageLeft ? (
        <>
          {imageBlock}
          {cardBlock}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-px w-8 -translate-y-1/2 bg-[#E31B23] lg:block" />
        </>
      ) : (
        <>
          {cardBlock}
          {imageBlock}
          <div className="pointer-events-none absolute right-1/2 top-1/2 z-0 hidden h-px w-8 -translate-y-1/2 bg-[#E31B23] lg:block" />
        </>
      )}
    </div>
  );
}

/* ── Scroll-tracking beam ──────────────────────────────────── */
function ScrollBeam({
  containerRef,
  dotRefs,
  onActiveIndexChange,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  dotRefs: React.RefObject<(HTMLDivElement | null)[]>;
  onActiveIndexChange: (index: number) => void;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });

  // Measure dot centres relative to container (as fractions of container height)
  const [dotPositions, setDotPositions] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const dots = dotRefs.current;
      if (!container || !dots) return;
      const cRect = container.getBoundingClientRect();
      const positions = dots.map((dot) => {
        if (!dot) return 0;
        const dRect = dot.getBoundingClientRect();
        return (dRect.top + dRect.height / 2 - cRect.top) / cRect.height;
      });
      setDotPositions(positions);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [containerRef, dotRefs]);

  // Map scroll progress to snap between dot positions (always starts at first dot)
  const snapped = useTransform(scrollYProgress, (v) => {
    if (dotPositions.length < 2) return dotPositions[0] ?? 0;
    const first = dotPositions[0];
    let reached = 0;
    for (let i = 1; i < dotPositions.length; i++) {
      const threshold = dotPositions[i] * 0.85 + 0.05;
      if (v >= threshold) reached = i;
    }
    return dotPositions[reached] ?? first;
  });

  const smoothBeamEnd = useSpring(snapped, {
    stiffness: 120,
    damping: 30,
    mass: 0.8,
  });

  const firstDot = dotPositions[0] ?? 0;

  // Beam top is fixed at first dot; height grows from 0 to (currentDot - firstDot)
  const beamHeight = useTransform(smoothBeamEnd, (v) => {
    const h = v - firstDot;
    return `${Math.max(0, h) * 100}%`;
  });

  // Glow orb position
  const orbTop = useTransform(smoothBeamEnd, (v) => `${v * 100}%`);

  // Track active dot index and notify parent
  useMotionValueEvent(snapped, "change", (v) => {
    if (dotPositions.length === 0) return;
    let idx = -1;
    for (let i = 0; i < dotPositions.length; i++) {
      if (Math.abs(v - dotPositions[i]) < 0.01) idx = i;
    }
    onActiveIndexChange(idx);
  });

  if (dotPositions.length === 0) return null;

  return (
    <>
      {/* Beam line — starts at first dot, grows downward */}
      <motion.div
        className="pointer-events-none absolute left-1/2 z-1 hidden w-[3px] -translate-x-1/2 rounded-full bg-linear-to-b from-[#E31B23] to-[#ff4d54] lg:block"
        style={{
          top: `${firstDot * 100}%`,
          height: beamHeight,
        }}
      />
      {/* Glow orb at beam tip */}
      <motion.div
        className="pointer-events-none absolute left-1/2 z-2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E31B23] shadow-[0_0_14px_4px_rgba(227,27,35,0.45)] lg:block"
        style={{ top: orbTop }}
      />
    </>
  );
}

/* ── Main section ──────────────────────────────────────────── */
export default function EmbroideredVersatileOptions({
  imageOverrides,
}: EmbroideredVersatileOptionsSectionProps) {
  const resolvedStyleItems = styleItems.map((item, index) => ({
    ...item,
    imageSrc: imageOverrides?.[index] ?? item.imageSrc,
  }));

  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#ECECEC] py-12 sm:py-14 lg:py-20">
      <Container>
        <div className="mx-auto max-w-285">
          <div className="text-center">
            <h3 className="relative inline-block px-1 text-[28px] font-semibold tracking-wider leading-none text-[#C91A25]">
              Versatile Options
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
            </h3>

            <h2 className="mt-6 text-[24px] font-normal leading-[1.15] text-[#7B0F14] sm:text-[28px] lg:text-[32px]">
              Custom Patch Styles for Every Purpose
            </h2>

            <p className="mx-auto mt-3 max-w-250 text-[17px] leading-[1.45] text-[#111111] sm:text-[18px]">
              We create embroidered patches for a wide range of needs, each one
              stitched with care and made to perform.
            </p>
          </div>

          <div
            ref={timelineRef}
            className="relative mx-auto mt-12 max-w-280 space-y-10 lg:space-y-14"
          >
            {/* Dotted track line */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-0 hidden h-[calc(100%-1rem)] -translate-x-1/2 border-l-2 border-dotted border-[#E31B23]/30 lg:block" />

            {/* Scroll-tracking beam */}
            <ScrollBeam
              containerRef={timelineRef}
              dotRefs={dotRefs}
              onActiveIndexChange={setActiveIndex}
            />

            {resolvedStyleItems.map((item, i) => (
              <StyleRow
                key={item.title}
                item={item}
                active={activeIndex >= i}
                dotRef={(el) => {
                  dotRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
