import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { BookLink, EnquiryLink } from "@/components/site/ui";
import {
  Difference,
  Faqs,
  GoodHands,
  ImagineThis,
  Priorities,
  RecruitmentTeaser,
  Reviews,
  ServicesPreview,
  TimeBack,
  ToDoIntro,
  TrustStrip,
} from "@/components/sections/Sections";
import { FAQS } from "@/data/site";
import heroImg from "@/assets/hero-laundry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Cleaning & Housekeeping Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Need help around the home? Hire a Wifey provides cleaning, housekeeping, laundry, ironing, dishes, bed making, meal prep and more across Hervey Bay. NDIS and DVA clients welcome. Book your Wifey today.",
      },
      { property: "og:title", content: "Home Cleaning & Housekeeping Hervey Bay | Hire a Wifey" },
      {
        property: "og:description",
        content:
          "Cleaning, laundry, ironing, dishes, beds, organisation and meal prep across Hervey Bay. Come home with less to do.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.slice(0, 6).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <ToDoIntro />
      <Difference />
      <GoodHands />
      <ServicesPreview />
      <Priorities />
      <TimeBack />
      <Reviews />
      <Faqs limit={6} />
      <ImagineThis />
      <RecruitmentTeaser />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1220px] items-center gap-10 px-6 py-12 md:px-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
      <div className="lg:col-span-6">
        <p className="eyebrow">Hervey Bay, Queensland</p>
        <h1 className="display-xl mt-5">
          Need a hand around the home?
          <br />
          <span className="text-pink">Hire a Wifey.</span>
        </h1>
        <p className="mt-6 font-display text-lg tracking-[0.02em] text-ink/70">
          We take care of home.
        </p>

        <p className="lede mt-7 max-w-lg">
          <strong className="font-semibold text-ink">Cleaning is only the beginning.</strong>{" "}
          Imagine coming home to clean floors, a tidy kitchen, fresh beds, folded washing and fewer
          jobs waiting for you.
        </p>
        <p className="lede mt-4 max-w-lg">
          Friendly, reliable household help throughout Hervey Bay — cleaning, laundry, ironing,
          dishes, changing beds, home organisation, tidying and meal preparation. Book us once,
          every week, every fortnight or whenever you need an extra pair of hands.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <BookLink />
          <EnquiryLink />
        </div>

        <p className="mt-6 text-sm text-ink/55">
          More than cleaning —{" "}
          <Link to="/what-we-do" className="text-pink underline underline-offset-4">
            see everything a Wifey can do
          </Link>
          .
        </p>
      </div>

      <Reveal className="lg:col-span-6">
        <div className="relative">
          <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-pink lg:block" />
          <div className="img-hover">
            <img
              src={heroImg}
              alt="A Hire a Wifey team member in a black and pink uniform folding fresh laundry in a Hervey Bay home"
              width={1408}
              height={1760}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/55">
            Someone has come in and taken care of the things you didn&apos;t have time to do.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
