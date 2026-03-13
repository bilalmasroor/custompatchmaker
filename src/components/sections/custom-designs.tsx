import Container from "../layout/container";

const cards = [
  {
    image: "https://patchmakers.uk/wp-content/uploads/2024/06/Leather-patches-for-hats-1024x683.jpg",
    imageAlt: "Leather patches for hats",
    label: "Empower:",
    description: "Brands, Communities, Individuals",
  },
  {
    image: "https://patchmakers.uk/wp-content/uploads/2025/01/2521603.jpg",
    imageAlt: "Custom patch on jacket",
    label: "Support:",
    description: "Memories, Milestones, Masterpieces",
  },
  {
    image: "https://patchmakers.uk/wp-content/uploads/2024/06/emb2-1024x686.jpg",
    imageAlt: "Embroidered patch",
    label: "Create:",
    description: "Practices, Mindsets, Futures",
  },
];

const badgeSrc = "https://patchmakers.uk/wp-content/uploads/2024/07/PMUSA.png";

export default function CustomDesigns() {
  return (
    <section className="border-b border-[#0B1C48]/15">
      <div className="bg-[#F4F6F8] py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.label}
                className="overflow-hidden rounded-xl bg-[#FFFFFF] shadow-[0_6px_24px_rgba(11,28,72,0.15)]"
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-52 w-full object-cover sm:h-56 lg:h-60"
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="text-[14px] font-semibold leading-tight text-[#C91A25] sm:text-[15px]">
                      {card.label}
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-[#1A1A1A] sm:text-[14px]">
                      {card.description}
                    </p>
                  </div>
                  <img
                    src={badgeSrc}
                    alt="Custom Patch Makers badge"
                    className="h-11 w-11 shrink-0 rounded-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
