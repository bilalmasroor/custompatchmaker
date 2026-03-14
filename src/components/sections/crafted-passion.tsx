import Container from "../layout/container";

const points = [
  "Over 15 years of patch-making expertise",
  "Dedicated Canadian customer support",
  "More than 15,000 satisfied clients nationwide",
  "Fast turnaround and free custom quotes",
];

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="h-8 w-8 shrink-0 fill-current text-[#C91A25]">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
    </svg>
  );
}

export default function Quality() {
  return (
    <section className="relative overflow-hidden border-b border-[#0B1C48]/15 py-10 sm:py-12 lg:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg1.webp')" }}
      />
      <div className="absolute inset-0 bg-[#0B1C48]/90" />

      <Container className="relative z-10 text-[#FFFFFF] [&_h2]:text-[#FFFFFF] [&_p]:text-[#FFFFFF]">
        <div className="mx-auto max-w-250 text-center text-[#FFFFFF]">
              <h2 className="font-[var(--font-poppins)] text-[40px] font-medium leading-[1.1]">
            Crafted with Passion, Made to Last
          </h2>
          <p className="mx-auto mt-4 max-w-200 text-[15px] leading-[1.45] sm:text-[16px] lg:text-[16px]">
            We’re here to help you create patches that truly reflect your vision, whether it’s for jackets, uniforms,
            hats, or any custom gear. Every design we produce is built on quality, creativity, and attention to
            detail.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-260 grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 lg:mt-10 lg:grid-cols-4 lg:gap-x-0">
          {points.map((point, index) => (
            <div
              key={point}
              className={`flex items-center gap-3 text-[#FFFFFF] lg:px-6 ${index > 0 ? "lg:border-l lg:border-[#FFFFFF]/40" : ""}`}
            >
              <div className="rounded-full bg-[#F2B705]">
                <CheckCircleIcon />
              </div>
              <p className="text-[15px] leading-[1.3] sm:text-[16px]">{point}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}