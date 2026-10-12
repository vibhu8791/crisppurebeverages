import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero, QualitySection, WhyChooseSection } from "@/components/site/Sections";

const title = "Quality | CRISPPURE BEVERAGES";
const description =
  "Quality at every step: source, purification, checks, filling, sealing, packaging and distribution.";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality at Every Step"
        subtitle="Careful, consistent handling from water source to distribution."
      />
      <QualitySection />
      <WhyChooseSection />
      <CtaSection />
    </>
  );
}
