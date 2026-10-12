import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, PageHero } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Contact Us | CRISPPURE BEVERAGES";
const description =
  "Contact CRISPPURE BEVERAGES on +91 70550 86832 or wecare@crisppure.info for packaged drinking water enquiries.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have a business enquiry? We're here to help."
      />
      <ContactSection />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
