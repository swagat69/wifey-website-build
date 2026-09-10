import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, EnquiryLink, BookLink } from "@/components/site/ui";
import { Dva, Ndis, TrustStrip } from "@/components/sections/Sections";

export const Route = createFileRoute("/ndis-dva")({
  head: () => ({
    meta: [
      { title: "NDIS Cleaning & DVA Household Services Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "NDIS cleaning and household assistance in Hervey Bay for eligible self-managed and plan-managed participants, plus approved DVA household services. Tell us what you need.",
      },
      { property: "og:title", content: "NDIS & DVA Household Services Hervey Bay" },
      {
        property: "og:description",
        content:
          "Household assistance for eligible NDIS participants and DVA clients across Hervey Bay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ndis-dva" },
    ],
    links: [{ rel: "canonical", href: "/ndis-dva" }],
  }),
  component: NdisDvaPage,
});

function NdisDvaPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="NDIS & DVA"
        title="Household assistance that's easy to arrange."
        intro="We welcome eligible self-managed and plan-managed NDIS participants, and eligible DVA clients requiring approved household assistance."
        actions={
          <>
            <EnquiryLink variant="ink">Make an enquiry</EnquiryLink>
            <BookLink variant="outline" />
          </>
        }
      />
      <TrustStrip />
      <Ndis />
      <Dva />
    </Layout>
  );
}
