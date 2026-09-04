import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, ManufacturingSection, PageHero, WhoWeServeSection } from "@/components/site/Sections";

const title = "Manufacturing | CRISPPURE BEVERAGES";
const description =
  "Hygienic production, controlled bottling, quality monitoring and secure packaging at CRISPPURE BEVERAGES.";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Modern Manufacturing. Consistent Quality."
        subtitle="Controlled, monitored production practices behind every CRISPPURE bottle."
      />
      <ManufacturingSection />
      <WhoWeServeSection />
      <CtaSection />
    </>
  );
}
