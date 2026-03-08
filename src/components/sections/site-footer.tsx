  import Container from "../layout/container";

const footerLinks = {
  company: ["Lorem About", "Lorem Team", "Lorem Careers"],
  products: ["Lorem Embroidered", "Lorem PVC", "Lorem Leather"],
  support: ["Lorem FAQ", "Lorem Shipping", "Lorem Contact"],
};

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1C48] py-10 text-[#FFFFFF] sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">PatchMaker</h3>
            <p className="mt-3 text-sm leading-6 text-[#FFFFFF]/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo porta lorem at volutpat.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#FFFFFF]/80">
              {footerLinks.company.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#FFFFFF]/80">
              {footerLinks.products.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#FFFFFF]/80">
              {footerLinks.support.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#FFFFFF]/20 pt-6 text-xs text-[#FFFFFF]/75 sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </Container>
    </footer>
  );
}
