import Container from "../layout/container";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="h-9 w-9 fill-current text-[#C91A25]">
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="border-b border-[#0B1C48]/15 bg-[#F4F6F8] py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="mx-auto grid max-w-268 grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.25fr_0.8fr] lg:gap-9">
          <div className="max-w-120">
            <h2 className="text-[32px] font-semibold leading-[1.08] text-[#0B1C48] sm:text-[38px] lg:text-[46px]">
              <span className="relative inline-block pr-1 text-[#C91A25]">
                Customized Patches
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-4 w-[102%] fill-none stroke-[#F2B705]"
                >
                  <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" strokeWidth="12" />
                </svg>
              </span>
              <br />
              For Every Style
            </h2>

            <p className="mt-8 text-[14px] leading-normal text-[#2B2B2B] sm:text-[15px] lg:text-[16px]">
              Got questions or ready to get started? Reach out to our team anytime, we’re here to make your patch
              design process easy, enjoyable, and truly Canadian.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="tel:+14372923019" aria-label="Urgent?" className="shrink-0">
                <PhoneIcon />
              </a>
              <div>
                <a href="tel:+14372923019" className="block text-[24px] font-semibold leading-[1.15] text-[#C91A25]">
                  Urgent?
                </a>
                <p className="mt-0.5 text-[14px] text-[#2B2B2B]">Call us +1 437 292 3019</p>
              </div>
            </div>

            <p className="mt-8 text-[15px] font-medium text-[#0B1C48]">We're available 24/7 with expert help</p>
          </div>

          <div className="rounded-xl border border-[#0B1C48]/15 bg-[#FFFFFF] p-6 shadow-[0_10px_30px_rgba(11,28,72,0.12)] sm:p-7">
            <form className="space-y-3" aria-label="New Form">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input type="text" placeholder="Full Name" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70" />
                <input type="email" placeholder="Email Address" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70" />
                <input type="text" placeholder="Campany Name" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70" />
                <input type="text" placeholder="Patches Type" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70" />
                <input type="tel" placeholder="Phone Number" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70" />
                <input type="file" className="h-13 rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-3 text-[13px] text-[#2B2B2B] file:mr-3 file:rounded file:border file:border-[#0B1C48]/25 file:bg-[#FFFFFF] file:px-2.5 file:py-1.5 file:text-[12px] file:text-[#0B1C48]" />
              </div>

              <textarea
                rows={4}
                placeholder="Message"
                className="min-h-24 w-full rounded border border-[#0B1C48]/20 bg-[#F4F6F8] px-4 py-3 text-[14px] text-[#2B2B2B] placeholder:text-[#2B2B2B]/70"
              />

              <button
                type="submit"
                className="h-13 w-full rounded bg-[#C91A25] text-[20px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#0B1C48]"
              >
                Send
              </button>
            </form>
          </div>

          <div className="mx-auto w-full max-w-95 lg:max-w-none">
            <img
              src="https://custompatchmakers.ca/wp-content/uploads/2025/10/patches-design.webp"
              alt="Patches design"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}