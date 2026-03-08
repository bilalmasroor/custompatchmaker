import Container from "../layout/container";

const steps = [
  {
    title: "Submit your design",
    description:
      "Upload your designs, logos, or even a rough sketch. Choose your product, colors, size, and style to bring your ideas to life.",
    image: "https://custompatchmakers.ca/wp-content/uploads/2026/02/istockphoto-1497794115-612x612-1.jpg",
  },
  {
    title: "Approve Your Proof",
    description:
      "Collaboration is key: Our designers will create a digital proof. Tell us what you think, and we'll work together until you love it.",
    image: "https://custompatchmakers.ca/wp-content/uploads/2026/02/ssss.webp",
  },
  {
    title: "The Wait is Almost Over",
    description:
      "With your approval in hand, our production team will meticulously bring your custom product to life.",
    image: "https://custompatchmakers.ca/wp-content/uploads/2026/02/external-Processing-web-smashingstocks-hand-drawn-black-smashing-stocks-2.jpg",
  },
  {
    title: "Unbox and Enjoy",
    description:
      "The moment you've been waiting for has arrived! We'll deliver your top-notch custom product to you in no time, free of charge.",
    image: "https://custompatchmakers.ca/wp-content/uploads/2025/10/100-percent.avif",
  },
];

export default function ProductShowcase() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="mx-auto max-w-245 text-center">
          <h2 className="text-[24px] font-semibold leading-none text-[#0B1C48] sm:text-[30px]">Order Process</h2>
          <p className="mt-4 text-[12px] font-normal leading-normal text-[#2B2B2B] sm:text-[13px]">
            One Click to Elevate Your Style – Order Now!
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-245 grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7">
          {steps.map((step) => (
            <article key={step.title} className="text-center">
              <img
                src={step.image}
                alt=""
                className="mx-auto h-30 w-30 object-contain sm:h-32 sm:w-32 lg:h-34 lg:w-34"
              />
              <h3 className="mt-6 text-[18px] font-semibold leading-[1.2] text-[#C91A25] sm:text-[20px]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-66.25 text-[11px] leading-[1.45] text-[#2B2B2B] sm:text-[12px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
