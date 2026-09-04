import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection,
  CtaSection,
  ContactSection,
  DistributorSection,
  Hero,
  ManufacturingSection,
  ProductsSection,
  QualitySection,
  WhoWeServeSection,
  WhyChooseSection,
} from "@/components/site/Sections";

const title = "CRISPPURE BEVERAGES | Packaged Drinking Water";
const description =
  "CRISPPURE BEVERAGES manufactures and supplies packaged drinking water in 1L, 500ml, 250ml and 200ml bottles.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <QualitySection />
      <ManufacturingSection />
      <WhoWeServeSection />
      <DistributorSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
