import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero, ProductsSection } from "@/components/site/Sections";

const title = "Our Products | CRISPPURE BEVERAGES";
const description =
  "CRISPPURE packaged drinking water in 1 litre, 500ml, 250ml and 200ml bottles for every occasion.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Range"
        title="Shop Products"
        subtitle="Refreshing hydration for every occasion."
      />
      <ProductsSection showHeading={false} />
      <CtaSection />
    </>
  );
}
