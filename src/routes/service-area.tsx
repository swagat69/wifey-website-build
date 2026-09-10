import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, BookLink, EnquiryLink } from "@/components/site/ui";
import { ServiceArea, TrustStrip } from "@/components/sections/Sections";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Cleaners in Hervey Bay — Service Area | Hire a Wifey" },
      {
        name: "description",
        content:
          "House cleaning and household help across Hervey Bay: Pialba, Scarness, Torquay, Urangan, Point Vernon, Kawungan, Urraween, Eli Waters, Wondunna, Nikenbah, Dundowran, Craignish, Booral, River Heads and more.",
      },
      { property: "og:title", content: "Service Area — Hervey Bay | Hire a Wifey" },
      {
        property: "og:description",
        content: "Your local Hervey Bay Wifeys — see the suburbs we service.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: ServiceAreaPage,
});

function ServiceAreaPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Service area"
        title="Your local Hervey Bay Wifeys."
        intro="Home cleaning, housekeeping and household assistance throughout Hervey Bay and surrounding communities."
        actions={
          <>
            <BookLink />
            <EnquiryLink>Is my suburb covered?</EnquiryLink>
          </>
        }
      />
      <TrustStrip />
      <ServiceArea />
    </Layout>
  );
}
