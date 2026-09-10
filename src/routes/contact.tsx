import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink } from "@/components/site/ui";
import { EnquirySection } from "@/components/sections/Sections";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries — Hire a Wifey Hervey Bay" },
      {
        name: "description",
        content:
          "Questions about cleaning, household help, NDIS or DVA services in Hervey Bay? Send an enquiry, email admin@hireawifeyaustralia.com.au or call 0448 168 480.",
      },
      { property: "og:title", content: "Contact Hire a Wifey — Hervey Bay" },
      {
        property: "og:description",
        content: "Talk to us about what you need help with around the home.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Enquiries"
        title="Talk to us."
        intro="This isn't the booking form — it's for questions, unusual jobs, or a chat about what would help most. Ready to book instead? Head straight to the booking page."
        actions={
          <>
            <a href={CONTACT.phoneHref} className="btn btn-ink">
              Call {CONTACT.phone}
            </a>
            <BookLink variant="outline" />
          </>
        }
      />
      <EnquirySection showHeading={false} />
    </Layout>
  );
}
