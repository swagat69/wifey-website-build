import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink, EnquiryLink } from "@/components/site/ui";
import { Priorities, ServicesFull, TrustStrip } from "@/components/sections/Sections";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Cleaning, Laundry & Household Help Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Home cleaning, laundry, ironing, bed making, dishes, kitchen resets, home organisation and meal preparation across Hervey Bay. One flexible service built around your priorities.",
      },
      { property: "og:title", content: "What We Do | Hire a Wifey Hervey Bay" },
      {
        property: "og:description",
        content:
          "One service, a whole lot of help — cleaning, laundry, ironing, beds, dishes, organisation and meal prep in Hervey Bay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="What can your Wifey do?"
        title={
          <>
            One service.
            <br />
            A whole lot of help.
          </>
        }
        intro="Your Wifey can help with the jobs that matter most to you. Open a category to see what's included — and remember you can mix and match within one visit."
        actions={
          <>
            <BookLink />
            <EnquiryLink />
          </>
        }
      />
      <TrustStrip />
      <ServicesFull />
      <Priorities />
    </Layout>
  );
}
