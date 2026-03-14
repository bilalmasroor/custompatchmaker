"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import Container from "@/components/layout/container";
import TypewriterBadge from "@/components/typewriter-badge";
import EmbroideredVersatileOptions from "@/components/sections/embroidered-versatile-options";
import EmbroideredWhyChoose from "@/components/sections/embroidered-why-choose";
import ChenilleBackingBorderOptions from "@/components/sections/chenille-backing-border-options";
import ServiceTextureCta from "@/components/sections/service-texture-cta";
import PatchCoverageStyles from "@/components/sections/patch-coverage-styles";
import Contact from "@/components/sections/contact-quote";
import ServiceStorySplit from "@/components/sections/service-story-split";
import Reviews from "@/components/sections/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* Parallax hero image */
function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:max-w-[520px]"
      initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div style={{ y, rotate }}>
        <motion.div
          animate={{ y: [0, -12, 0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/chenille/Hero.png"
            alt="Custom chenille patch designs"
            className="h-auto w-full object-contain drop-shadow-2xl"
            width={520}
            height={520}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ChenillePatchesPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2B2B]">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#0B1C48] text-[#FFFFFF]">
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/images/bg1.webp")',
              }}
            />
            <div className="absolute inset-0 bg-[#0B1C48]/55" />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B1C48]/90 via-[#0B1C48]/88 to-[#0B1C48]/80" />
          </div>

          <Container>
            <div className="relative grid min-h-[640px] items-center gap-10 py-[48px] sm:py-[64px] lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-8 lg:py-[80px]">
              <motion.div
                className="max-w-[640px]"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeLeft} transition={{ duration: 0.6 }}>
                  <TypewriterBadge text="Custom Chenille Patches" />
                </motion.div>

                <motion.h1
                  className="mt-[20px] max-w-[600px] font-[var(--font-poppins)] text-[40px] font-medium leading-[1.08] tracking-[-0.02em] text-[#FFFFFF]"
                  variants={fadeLeft}
                  transition={{ duration: 0.7 }}
                >
                  Crafted with Texture,
                  <br />
                  Made to Stand Out
                </motion.h1>

                <motion.p
                  className="mt-[20px] max-w-[600px] text-[15px] leading-[1.7] text-[#FFFFFF]/85 sm:text-[16px]"
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                >
                  Our custom chenille patches bring bold texture, rich colour,
                  and a classic varsity feel to every design. From school
                  emblems and team jackets to fashion statements and branded
                  merchandise, each piece is crafted to look premium and last.
                </motion.p>
                <motion.p
                  className="mt-[12px] max-w-[600px] text-[15px] leading-[1.7] text-[#FFFFFF]/85 sm:text-[16px]"
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                >
                  We use high-quality yarns, durable backings, and expert
                  finishing to create chenille patches that feel soft, wear
                  well, and stand out from a distance. If you want depth,
                  warmth, and impact, this is the patch style to choose.
                </motion.p>

                <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                  <a
                    href="#get-a-free-quote"
                    className="mt-[34px] inline-flex min-h-[42px] font-medium items-center justify-center rounded-md border-2 border-[#FFFFFF] bg-[#FFFFFF] px-[20px] text-[15px] text-[#C91A25] transition-all duration-300 hover:bg-transparent hover:text-[#FFFFFF]"
                  >
                    Start Your Order
                  </a>
                </motion.div>
              </motion.div>

              <HeroImage />
            </div>
          </Container>
        </section>

        {/* Versatile Options — slide from left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeLeft}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <EmbroideredVersatileOptions
            imageOverrides={[
              "/images/chenille/1.png",
              "/images/chenille/2.png",
              "/images/chenille/3.png",
            ]}
          />
        </motion.div>

        {/* Why Choose — scale in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={scaleIn}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <EmbroideredWhyChoose />
        </motion.div>

        {/* Backing & Border Options — slide from right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeRight}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChenilleBackingBorderOptions />
        </motion.div>

        {/* Texture CTA — scale in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={scaleIn}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <ServiceTextureCta
            eyebrow="Vibrant Textures"
            title="Discover Our Premium Chenille Patch Designs"
            paragraphs={[
              <span key="p1">
                Soft, bold, and full of personality our{" "}
                <strong>custom chenille patches</strong> capture creativity
                through color and texture. Each patch is carefully crafted using
                high-density yarns to create plush, eye-catching designs ideal
                for varsity jackets, hoodies, and team apparel.
              </span>,
              <span key="p2">
                From school logos to fashion statements, these{" "}
                <strong>chenille patches</strong> bring warmth, nostalgia, and
                durability to every piece. Experience the perfect blend of
                comfort and creativity with patches that truly stand out.
              </span>,
            ]}
            buttonText="Start Your Order"
            buttonHref="#"
            backgroundImageSrc="/images/chenille/Simpson.png"
          />
        </motion.div>

        {/* Coverage Styles — fade up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <PatchCoverageStyles />
        </motion.div>

        {/* Contact — slide from left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeLeft}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Contact />
        </motion.div>

        {/* Story Split */}
        <ServiceStorySplit
          title="The Craft and Creativity of Custom Chenille Patches"
          subtitle="The Art and Craft of Perfectly Printed Patches"
          paragraphs={[
            "Chenille patches combine soft textures with bold colors to create eye-catching emblems full of character. Known for their classic varsity-style appeal, these patches are crafted with thick, plush yarns that make every design stand out. Whether showcasing school spirit, sports teams, or brand logos, custom chenille patches bring warmth and personality to every piece.",
            "Their raised surface and intricate detailing make them perfect for jackets, hoodies, and letterman apparel. Built to last and designed to impress, chenille patches blend nostalgia with modern craftsmanship, making them a favorite among creatives and brands alike.",
          ]}
          imageSrc="https://custompatchmakers.ca/wp-content/uploads/2025/11/chenille_patches-lettercustom-copyrighted-removebg-preview.png"
          imageAlt="Custom chenille patch collage"
          backgroundImageSrc="/images/chenille/Simpson.png"
        />

        {/* Reviews — fade up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Reviews />
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
