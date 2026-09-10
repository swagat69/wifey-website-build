import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink, EnquiryLink } from "@/components/site/ui";
import { Faqs } from "@/components/sections/Sections";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Cleaning & Household Help Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Answers about what a Hire a Wifey service includes, insurance and police checks, products and equipment, regular and one-off visits, NDIS and DVA, service areas and booking.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Hire a Wifey" },
      {
        property: "og:description",
        content: "Everything customers ask us about cleaning and household help in Hervey Bay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Answers"
        title="Frequently asked questions"
        intro="Tap a question to open the answer. If yours isn't here, just ask — we're happy to talk it through."
        actions={
          <>
            <BookLink />
            <EnquiryLink>Ask us a question</EnquiryLink>
          </>
        }
      />
      <Faqs />
    </Layout>
  );
}
