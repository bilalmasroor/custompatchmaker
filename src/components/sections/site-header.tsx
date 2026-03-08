"use client";

import { useState } from "react";
import Container from "../layout/container";

const serviceItems = [
  { label: "Embroidered patches", href: "/embroidered-patches" },
  { label: "Woven Patches", href: "#" },
  { label: "Chenille Patches", href: "/chenille-patches" },
  { label: "Printed Patches", href: "#" },
  { label: "PVC Patches", href: "#" },
  { label: "Leather Patches", href: "#" },
  { label: "Enamel Pin", href: "#" },
];

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#" },
  { label: "Samples", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#0B1C48]/15 bg-[#FFFFFF] shadow-[inset_0_1px_0_#C91A25]">
      <Container>
        <div className="flex min-h-22 items-center justify-between gap-5">
          <a href="/" aria-label="Custom Patch Makers Home" className="flex items-center">
            <img src="/images/logo.png" alt="Custom Patch Makers logo" className="h-14 w-auto object-contain sm:h-24" />
          </a>

          <div className="hidden lg:ml-auto lg:flex">
            <nav aria-label="Header" className="flex items-center gap-8 text-[17px] leading-none">
              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    item.active ? "text-[#C91A25]" : "text-[#0B1C48] hover:text-[#C91A25]"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[17px] font-medium text-[#0B1C48] transition-colors hover:text-[#C91A25]"
                  aria-haspopup="true"
                >
                  Service
                  <svg viewBox="0 0 320 512" aria-hidden="true" className="h-3 w-3 fill-current">
                    <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                  </svg>
                </button>

                <ul className="invisible absolute left-0 top-full z-40 mt-4 min-w-56 rounded-md border border-[#0B1C48]/15 bg-[#FFFFFF] py-2 opacity-0 shadow-[0_10px_30px_rgba(11,28,72,0.12)] transition-all group-hover:visible group-hover:opacity-100">
                  {serviceItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-[15px] text-[#2B2B2B] transition-colors hover:bg-[#F4F6F8] hover:text-[#C91A25]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {navItems.slice(2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[17px] font-medium text-[#0B1C48] transition-colors hover:text-[#C91A25]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#0B1C48]/20 bg-[#FFFFFF] text-[#0B1C48] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <svg viewBox="0 0 1000 1000" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 1000 1000" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#0B1C48]/15 pb-4 pt-3 lg:hidden">
            <nav aria-label="Header Mobile" className="flex flex-col gap-1">
              <a href="/" className="px-2 py-2 text-[16px] font-medium text-[#C91A25]">
                Home
              </a>
              <a
                href="#"
                className="px-2 py-2 text-[16px] font-medium text-[#0B1C48] hover:text-[#C91A25]"
              >
                About Us
              </a>

              <button
                type="button"
                className="flex items-center justify-between px-2 py-2 text-left text-[16px] font-medium text-[#0B1C48]"
                onClick={() => setIsMobileServiceOpen((prev) => !prev)}
                aria-expanded={isMobileServiceOpen}
              >
                Service
                <svg
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                  className={`h-3 w-3 fill-current transition-transform ${isMobileServiceOpen ? "rotate-180" : ""}`}
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                </svg>
              </button>

              {isMobileServiceOpen && (
                <ul className="ml-2 border-l border-[#0B1C48]/20 pl-4">
                  {serviceItems.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="block py-2 text-[15px] text-[#2B2B2B] hover:text-[#C91A25]">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <a href="#" className="px-2 py-2 text-[16px] font-medium text-[#0B1C48] hover:text-[#C91A25]">
                Samples
              </a>
              <a href="#" className="px-2 py-2 text-[16px] font-medium text-[#0B1C48] hover:text-[#C91A25]">
                Blog
              </a>
              <a href="#" className="px-2 py-2 text-[16px] font-medium text-[#0B1C48] hover:text-[#C91A25]">
                Contact Us
              </a>

            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
