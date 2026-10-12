import { createFileRoute } from "@tanstack/react-router";
import { DistributorSection, PageHero, WhoWeServeSection } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Become a Distributor | CRISPPURE BEVERAGES";
const description =
  "Partner with CRISPPURE BEVERAGES to supply packaged drinking water to retail, hotels, offices and events.";

export const Route = createFileRoute("/distributors")({
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
  component: DistributorsPage,
});

function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Partnership"
        title="Partner With CRISPPURE"
        subtitle="Supplying retail outlets, hotels, offices, events and businesses."
      />
      <DistributorSection />
      <WhoWeServeSection />
      <section className="py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
