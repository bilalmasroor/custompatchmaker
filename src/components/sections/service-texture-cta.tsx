import { ReactNode } from "react";
import Container from "../layout/container";

type ServiceTextureCtaSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: ReactNode[];
  buttonText: string;
  buttonHref: string;
  backgroundImageSrc: string;
};

export default function ServiceTextureCta({
  eyebrow,
  title,
  paragraphs,
  buttonText,
  buttonHref,
  backgroundImageSrc,
}: ServiceTextureCtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#0B1C48]/15 py-10 sm:py-12 lg:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="absolute inset-0 bg-[#0B1C48]/90" />

      <Container className="relative z-10 text-[#FFFFFF] [&_h2]:text-[#FFFFFF] [&_p]:text-[#FFFFFF] [&_strong]:text-[#FFFFFF]">
        <div className="mx-auto max-w-250 text-center text-[#FFFFFF]">
          <div className="relative inline-block px-2">
            <h3 className="text-[14px] font-semibold tracking-wider uppercase leading-none text-[#F2B705]">{eyebrow}</h3>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="mt-1 h-2.5 w-full fill-none stroke-[#C91A25]"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="16" />
            </svg>
          </div>

          <h2 className="mx-auto mt-4 max-w-[980px] text-[38px] font-semibold leading-[1.1] text-[#FFFFFF] sm:text-[44px] lg:text-[58px]">
            {title}
          </h2>

          <div className="mx-auto mt-4 max-w-200 space-y-4 text-[17px] leading-[1.45] text-[#FFFFFF] sm:text-[18px] lg:text-[20px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href={buttonHref}
            className="mt-[34px] inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C91A25] px-[30px] text-[15px] font-semibold text-[#FFFFFF] transition-all duration-300 hover:bg-[#C91A25]/90"
          >
            {buttonText}
          </a>
        </div>
      </Container>
    </section>
  );
}
