import { ReactNode } from "react";
import Container from "../layout/container";
import Image from "next/image";

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
    <section className="relative isolate overflow-hidden">
      {/* Fixed background image with blue overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />
      <div className="absolute inset-0 -z-10 bg-[#0B1C48]/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1C48]/85 via-[#0B1C48]/70 to-[#0B1C48]/40" />

      <Container>
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12 lg:py-20">
          {/* Text content */}
          <div>
            <h2 className="text-[28px] mb-5 font-medium leading-[1.1] text-white sm:text-[34px] lg:text-[32px]">
              {title}
            </h2>

            <h3 className="mt-3 text-[17px] font-medium italic leading-[1.3] text-white/90 sm:text-[19px] lg:text-[22px]">
              {subtitle}
            </h3>

            <div className="mt-6 space-y-5 text-[14px] leading-[1.7] text-white/80 sm:text-[15px] lg:text-[16px]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Patch collage image */}
          <div className="mx-auto w-full max-w-[420px] lg:ml-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width={420}
              height={340}
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
