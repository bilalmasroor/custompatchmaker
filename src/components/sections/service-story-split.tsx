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

export default function ServiceStorySplit({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
}: ServiceStorySplitSectionProps) {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto grid max-w-268 grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-10">
          <div className="max-w-177.5">
            <h2 className="text-[32px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[38px] lg:text-[50px]">
              {title}
            </h2>

            <h3 className="mt-4 text-[22px] font-semibold leading-[1.2] text-[#C91A25] sm:text-[26px] lg:text-[30px]">
              {subtitle}
            </h3>

            <div className="mt-5 space-y-4 text-[14px] leading-[1.45] text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
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