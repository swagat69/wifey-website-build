import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink, EnquiryLink } from "@/components/site/ui";
import { HowItWorks, RegularService, TimeBack } from "@/components/sections/Sections";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Booking a Wifey in Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Five simple steps: tell us what you need, choose one-off, weekly or fortnightly, set your priorities, your Wifey gets to work, and you enjoy your time back.",
      },
      { property: "og:title", content: "How It Works | Hire a Wifey Hervey Bay" },
      {
        property: "og:description",
        content:
          "Tell us what you need, choose your service, set your priorities — and come home with less to do.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="The process"
        title="How it works"
        intro="No lock-in complexity and no rigid checklist. Tell us about your home, choose how often you'd like help, and we'll work through your priorities during the booked time."
        actions={
          <>
            <BookLink />
            <EnquiryLink />
          </>
        }
      />
      <HowItWorks heading={false} />
      <RegularService />
      <TimeBack />
    </Layout>
  );
}
