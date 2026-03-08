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

export default function ServiceTextureCtaSection({
  eyebrow,
  title,
  paragraphs,
  buttonText,
  buttonHref,
  backgroundImageSrc,
}: ServiceTextureCtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#7A1119] py-16 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="absolute inset-0 bg-[#7B0F14]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.2))]" />

      <Container>
        <div className="relative z-10 mx-auto max-w-[1160px] text-center text-[#FFFFFF] [&_h2]:text-[#FFFFFF] [&_h3]:text-[#FFFFFF] [&_p]:text-[#FFFFFF] [&_strong]:text-[#FFFFFF]">
          <h3 className="relative inline-block px-1 text-[24px] font-semibold leading-none tracking-[-0.01em] !text-[#FFFFFF] sm:text-[30px] lg:text-[36px]">
            {eyebrow}
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3 w-full fill-none stroke-[#C91A25]"
            >
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="12" />
            </svg>
          </h3>

          <h2 className="mx-auto mt-5 max-w-[1250px] text-[42px] font-bold leading-[1.12] tracking-[-0.02em] !text-[#FFFFFF] sm:text-[54px] lg:text-[64px]">
            {title}
          </h2>

          <div className="mx-auto mt-6 max-w-[1000px] space-y-4 text-[16px] leading-[1.52] text-[#FFFFFF] sm:text-[18px] lg:text-[20px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href={buttonHref}
            className="mt-8 inline-flex h-[54px] min-w-[174px] items-center justify-center rounded-[4px] bg-[#FFFFFF] px-7 text-[16px] font-normal leading-none text-[#D0101E] transition hover:bg-[#F5F5F5] sm:px-9 sm:text-[20px]"
          >
            {buttonText}
          </a>
        </div>
      </Container>
    </section>
  );
}
