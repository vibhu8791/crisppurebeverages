import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, CtaSection, PageHero, WhyChooseSection } from "@/components/site/Sections";

const title = "About Us | CRISPPURE BEVERAGES";
const description =
  "CRISPPURE BEVERAGES is a packaged drinking water manufacturer serving homes, offices, hospitality and retail.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CRISPPURE"
        title="Refreshing Lives with CRISPPURE"
        subtitle="Quality packaged drinking water for everyday hydration, hospitality, events and business."
      />
      <AboutSection withCta={false} />
      <WhyChooseSection />
      <CtaSection />
    </>
  );
}
