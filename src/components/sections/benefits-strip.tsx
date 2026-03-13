const items = [
  { label: "Free Shipping", icon: TruckIcon },
  { label: "Free Art", icon: EaselIcon },
  { label: "10 Minimum Order Qty", icon: OfferIcon },
  { label: "Competitive Prices", icon: OfferIcon },
];

function TruckIcon() {
  return (
    <svg viewBox="0 0 640 512" aria-hidden="true" className="h-7 w-7 shrink-0 fill-current text-[#0B1C48]">
      <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9l-73.9-73.9c-9-9-21.2-14.1-33.9-14.1H448V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v272c0 26.5 21.5 48 48 48h16c0 44.2 35.8 80 80 80s80-35.8 80-80h192c0 44.2 35.8 80 80 80s80-35.8 80-80h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM160 432c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm336 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-160H448V176h38.1l73.9 73.9V272z" />
    </svg>
  );
}

function EaselIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="h-7 w-7 shrink-0 fill-current text-[#0B1C48]">
      <path d="M336 0H176c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h69.2l-51.1 136.3c-3.1 8.3 1.1 17.5 9.4 20.6l15 5.6c8.3 3.1 17.5-1.1 20.6-9.4L212.7 352h86.7l53.6 143.1c3.1 8.3 12.3 12.5 20.6 9.4l15-5.6c8.3-3.1 12.5-12.3 9.4-20.6L346.8 352H416c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-48V32c0-17.7-14.3-32-32-32zm-16 64H192V48h128v16zm64 224H128V128h256v160z" />
    </svg>
  );
}

function OfferIcon() {
  return (
    <svg viewBox="0 0 576 512" aria-hidden="true" className="h-7 w-7 shrink-0 fill-current text-[#0B1C48]">
      <path d="M560 224h-29.5c-5.4-17.2-14.7-33-27.1-46l20.9-20.9c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L458.2 133c-13-12.4-28.8-21.7-46-27.1V76.4c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16V106c-17.2 5.4-33 14.7-46 27.1l-20.9-20.9c-6.2-6.2-16.4-6.2-22.6 0L236 134.8c-6.2 6.2-6.2 16.4 0 22.6l20.9 20.9c-12.4 13-21.7 28.8-27.1 46H200c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h29.8c5.4 17.2 14.7 33 27.1 46L236 355.2c-6.2 6.2-6.2 16.4 0 22.6l22.6 22.6c6.2 6.2 16.4 6.2 22.6 0l20.9-20.9c13 12.4 28.8 21.7 46 27.1V436c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-29.5c17.2-5.4 33-14.7 46-27.1l20.9 20.9c6.2 6.2 16.4 6.2 22.6 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6l-20.9-20.9c12.4-13 21.7-28.8 27.1-46H560c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM380.2 256c0 33.1-26.9 60-60 60s-60-26.9-60-60 26.9-60 60-60 60 26.9 60 60zM32 96C14.3 96 0 110.3 0 128v320c0 17.7 14.3 32 32 32h128V96H32zm96 336c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
  );
}

export default function BenefitsStrip() {
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-b border-[#0B1C48]/15 bg-[#FFFFFF] py-4 sm:py-5">
      <div className="benefits-loop-track flex w-max items-center gap-10 whitespace-nowrap pr-10 sm:gap-14 sm:pr-14">
        {loopItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex min-w-max items-center gap-2.5 px-0.5">
            <item.icon />
            <span className="text-[16px] font-semibold leading-none text-[#0B1C48] sm:text-[18px]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
