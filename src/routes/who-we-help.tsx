import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink, EnquiryLink } from "@/components/site/ui";
import { GoodHands, WhoWeHelp, WhyChoose } from "@/components/sections/Sections";

export const Route = createFileRoute("/who-we-help")({
  head: () => ({
    meta: [
      { title: "Who We Help — Families, Professionals & Seniors Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Busy families, working professionals, seniors, people needing temporary help, NDIS participants and DVA clients across Hervey Bay — and anyone who'd rather not spend the weekend cleaning.",
      },
      { property: "og:title", content: "Who We Help | Hire a Wifey Hervey Bay" },
      {
        property: "og:description",
        content:
          "Household help for busy families, working professionals, seniors, NDIS participants and DVA clients in Hervey Bay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/who-we-help" },
    ],
    links: [{ rel: "canonical", href: "/who-we-help" }],
  }),
  component: WhoWeHelpPage,
});

function WhoWeHelpPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Who we help"
        title="Household help, whatever your week looks like."
        intro="Every home runs differently. Here's who we most often help around Hervey Bay — if you don't see yourself on the list, ask anyway."
        actions={
          <>
            <BookLink />
            <EnquiryLink />
          </>
        }
      />
      <WhoWeHelp heading={false} />
      <WhyChoose />
      <GoodHands />
    </Layout>
  );
}
