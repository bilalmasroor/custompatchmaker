import { ReactNode } from "react";
import Container from "../layout/container";

type ServiceStorySplitSectionProps = {
  title: string;
  subtitle: string;
  paragraphs: ReactNode[];
  imageSrc: string;
  imageAlt: string;
  backgroundImageSrc: string;
};

export default function ServiceStorySplitSection({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
}: ServiceStorySplitSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#7A1119] bg-[#980F18] py-14 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="absolute inset-0 bg-[#8C0E14]/88" />

      <Container>
        <div className="relative z-10 grid items-center gap-10 text-[#FFFFFF] [&_h2]:!text-[#FFFFFF] [&_h3]:!text-[#FFFFFF] [&_p]:!text-[#FFFFFF] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-[780px] text-[#FFFFFF]">
            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.02em] !text-[#FFFFFF] sm:text-[52px] lg:text-[62px]">
              {title}
            </h2>

            <h3 className="mt-5 text-[30px] font-semibold leading-[1.18] tracking-[-0.01em] !text-[#FFFFFF] sm:text-[36px] lg:text-[42px]">
              {subtitle}
            </h3>

            <div className="mt-6 space-y-5 text-[17px] leading-[1.45] text-[#FFFFFF] sm:text-[18px] lg:text-[20px]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] lg:ml-auto">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width={434}
              height={339}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}