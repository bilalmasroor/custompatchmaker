"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      aria-hidden="true"
      className="h-9 w-9 fill-current text-[#C91A25]"
    >
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Changed grid to 2 columns and adjusted max-width */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <h2 className="font-[var(--font-poppins)] text-[40px] font-medium leading-[1.1] text-[#0B1C48]">
              <span className="relative inline-block pr-2 text-[#0B1C48]">
                Customized Patches
                <motion.svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-4 w-[102%] fill-none stroke-[#C91A25]"
                >
                  <motion.path
                    d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                    strokeWidth="12"
                    initial={{ pathLength: 0, opacity: 1 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.6 }}
                  />
                </motion.svg>
              </span>
              <br />
              For Every Style
            </h2>

            <p className="mt-8 text-[15px] leading-relaxed text-[#2B2B2B] sm:text-[16px] lg:text-[17px]">
              Got questions or ready to get started? Reach out to our team
              anytime, we’re here to make your patch design process easy,
              enjoyable, and truly Canadian.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="tel:+14372923019"
                aria-label="Urgent?"
                className="shrink-0 rounded-full bg-white p-3 shadow-sm"
              >
                <PhoneIcon />
              </a>
              <div>
                <a
                  href="tel:+14372923019"
                  className="block text-[24px] font-bold leading-tight text-[#C91A25] hover:text-[#0B1C48] transition-colors"
                >
                  Urgent?
                </a>
                <p className="mt-1 text-[15px] font-medium text-[#2B2B2B]">
                  Call us +1 437 292 3019
                </p>
              </div>
            </div>

            <p className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-[#0B1C48] shadow-sm border border-[#0B1C48]/5">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              We&apos;re available 24/7 with expert help
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-2xl border border-[#0B1C48]/10 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(11,28,72,0.1)] sm:p-10">
            <h3 className="mb-6 text-[24px] font-bold text-[#0B1C48]">
              Get a Free Quote
            </h3>

            <form className="space-y-4" aria-label="Contact Form">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
                />
                <input
                  type="text"
                  placeholder="Patches Type"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
                />
                <input
                  type="file"
                  className="h-14 w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-3 py-2 text-[14px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 file:mr-3 file:rounded-md file:border-0 file:bg-[#0B1C48] file:px-4 file:py-1.5 file:text-[13px] file:font-semibold file:text-white hover:file:bg-[#C91A25] file:transition-colors file:cursor-pointer"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-[#0B1C48]/15 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#2B2B2B] outline-none transition-all focus:border-[#C91A25] focus:bg-white focus:ring-1 focus:ring-[#C91A25]/50 placeholder:text-[#2B2B2B]/60"
              />

              <button
                type="submit"
                className="h-14 w-full rounded-lg bg-[#C91A25] text-[18px] font-bold tracking-wide text-white shadow-md transition-all duration-300 hover:bg-[#0B1C48] hover:shadow-lg active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
