import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { BookLink, EnquiryLink, SectionLabel } from "@/components/site/ui";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CONTACT, FAQS, REVIEWS, SERVICE_GROUPS, SUBURBS } from "@/data/site";
import bedImg from "@/assets/bed-making.jpg";
import kitchenImg from "@/assets/kitchen-reset.jpg";
import timeImg from "@/assets/time-back.jpg";

/* ------------------------- TRUST STRIP ---------------------------- */

const TRUST = [
  "Fully insured",
  "Wifeys with current police checks",
  "One-off services",
  "Weekly services",
  "Fortnightly services",
  "NDIS clients welcome",
  "DVA clients welcome",
  "Servicing Hervey Bay",
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-blush/60">
      <ul className="mx-auto flex max-w-[1220px] flex-wrap gap-x-8 gap-y-3 px-6 py-5 md:px-12">
        {TRUST.map((t) => (
          <li
            key={t}
            className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/70"
          >
            <span className="h-1 w-1 rounded-full bg-pink" />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* --------------------------- TO-DO -------------------------------- */

export function ToDoIntro() {
  const lines = [
    "The bathroom needs cleaning.",
    "There's washing waiting to be folded.",
    "The dishwasher needs emptying.",
    "The sheets need changing.",
    "Dinner needs preparing.",
    "And somehow the floors need cleaning again.",
  ];
  return (
    <section className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <SectionLabel n="01">The good news</SectionLabel>
          <h2 className="display-lg mt-6">
            Your to-do list
            <br />
            just got shorter.
          </h2>
          <p className="lede mt-8 max-w-xl">
            There&apos;s always something that needs doing around the home.
          </p>
          <ul className="mt-6 max-w-xl space-y-2 border-l border-pink/40 pl-6">
            {lines.map((l) => (
              <li key={l} className="text-[1.05rem] leading-relaxed text-ink/70">
                {l}
              </li>
            ))}
          </ul>
          <p className="lede mt-8 max-w-xl">You could spend your day off catching up on it all…</p>
          <p className="mt-3 font-display text-3xl leading-tight text-pink md:text-5xl">
            Or you could Hire a Wifey.
          </p>

          <div className="mt-10 max-w-xl border-t border-ink/15 pt-8">
            <p className="text-ink/70">
              We&apos;re not here to give every customer the exact same cleaning checklist.
              We&apos;re here to ask:
            </p>
            <p className="mt-3 font-display text-2xl italic leading-snug">
              &ldquo;What would make your life easier?&rdquo;
            </p>
            <p className="mt-3 text-ink/70">
              Tell us what needs doing and we&apos;ll tailor your Wifey service around your home and
              priorities.
            </p>
            <BookLink className="mt-7" />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={120}>
          <div className="img-hover lg:sticky lg:top-28">
            <img
              src={bedImg}
              alt="Hands smoothing a fresh white sheet while making a bed"
              width={1000}
              height={1250}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ THE DIFFERENCE -------------------------- */

export function Difference() {
  const items = [
    "folding three baskets of washing",
    "changing everyone's beds",
    "emptying the dishwasher",
    "getting the kitchen back under control",
    "organising the pantry",
    "preparing ingredients for dinner",
    "doing a combination of everything",
  ];
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <SectionLabel n="02">The Hire a Wifey difference</SectionLabel>
          <h2 className="display-lg mt-6 max-w-3xl text-white">
            More than
            <br />
            just a cleaner.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/75">
              There are plenty of companies that will clean your floors and bathrooms. Hire a Wifey
              is different.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              We created our service around the reality that keeping a home running involves much
              more than cleaning.
            </p>
            <p className="mt-8 font-display text-2xl leading-snug text-white">
              Sometimes the biggest help isn&apos;t vacuuming.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={90}>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {items.map((i) => (
                <li key={i} className="py-3.5 text-white/80">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={160}>
            <div className="img-hover">
              <img
                src={kitchenImg}
                alt="Wiping down a kitchen bench beside an open dishwasher full of clean dishes"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover grayscale"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-pink pt-10">
          <p className="font-display text-3xl leading-tight md:text-5xl">
            One Wifey. One visit.
            <br />
            <span className="text-pink">A whole lot less for you to worry about.</span>
          </p>
          <BookLink className="mt-9">Book your Wifey</BookLink>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- GOOD HANDS ---------------------------- */

export function GoodHands() {
  const pillars = [
    { t: "Fully insured", d: "Cover in place for the work we do in your home." },
    { t: "Current police checks", d: "Every Wifey holds a current police check." },
    { t: "Local Hervey Bay service", d: "We live and work in the bay, not a call centre." },
    { t: "Customer-focused Wifeys", d: "Respectful, reliable and here to make your week easier." },
  ];
  return (
    <section className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel n="03">Trust</SectionLabel>
          <h2 className="display-lg mt-6">
            Your home
            <br />
            is in good hands.
          </h2>
          <p className="lede mt-7 max-w-md">
            Inviting someone into your home requires trust. We take that seriously.
          </p>
          <p className="lede mt-4 max-w-md">
            Hire a Wifey is fully insured, and our Wifeys have current police checks. We are focused
            on providing professional, respectful and reliable household assistance so customers can
            feel comfortable welcoming a Wifey into their home.
          </p>
          <BookLink variant="ink" className="mt-8">
            Book with confidence
          </BookLink>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={90}>
          <dl className="grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.t} className="bg-cream p-7">
                <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em]">{p.t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/60">{p.d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- SERVICES ----------------------------- */

export function ServicesFull() {
  return (
    <section id="services" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      <div className="border-t border-ink/15">
        {SERVICE_GROUPS.map((g, i) => (
          <details key={g.title} className="group border-b border-ink/15" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center gap-5 py-6 marker:hidden">
              <span className="font-display text-sm text-pink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl leading-tight transition-colors group-hover:text-pink md:text-4xl">
                {g.title}
              </h2>
              <span className="ml-auto text-2xl leading-none text-ink/40 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-8 md:pl-[3.1rem]">
              {g.note && <p className="mb-5 max-w-2xl text-ink/70">{g.note}</p>}
              {g.items.length > 0 && (
                <ul className="columns-1 gap-x-10 sm:columns-2 lg:columns-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="mb-2 break-inside-avoid text-[0.95rem] text-ink/70 before:mr-2 before:text-pink before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <BookLink />
        <EnquiryLink>Not sure? Ask us</EnquiryLink>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel n="04">What can your Wifey do?</SectionLabel>
            <h2 className="display-lg mt-6">
              One service.
              <br />
              A whole lot of help.
            </h2>
            <p className="lede mt-7 max-w-md">
              Your Wifey can help with the jobs that matter most to you — cleaning is only one of
              them.
            </p>
            <Link to="/what-we-do" className="btn btn-ink mt-8">
              See everything we do
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={90}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {SERVICE_GROUPS.map((g, i) => (
                <li key={g.title} className="border-b border-ink/15">
                  <Link
                    to="/what-we-do"
                    hash="services"
                    className="flex items-baseline gap-4 py-4 transition-colors hover:text-pink"
                  >
                    <span className="font-display text-xs text-pink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl">{g.title}</span>
                    <span className="ml-auto text-ink/30">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- PRIORITIES ---------------------------- */

export function Priorities() {
  const list = [
    "Clean bathrooms",
    "Vacuum and mop",
    "Change the beds",
    "Fold the washing",
    "Empty the dishwasher",
    "Tidy the kitchen",
  ];
  return (
    <section className="bg-blush/70">
      <div className="mx-auto grid items-center gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-12 lg:gap-16 xl:mx-auto xl:max-w-[1220px]">
        <Reveal className="lg:col-span-6">
          <SectionLabel n="05">Build your own visit</SectionLabel>
          <h2 className="display-lg mt-6">
            Your home.
            <br />
            Your priorities.
          </h2>
          <p className="lede mt-8 max-w-lg">
            You don&apos;t necessarily need to book completely separate services. Tell us what
            matters most and we&apos;ll work through the agreed priorities during your booked time.
          </p>
          <p className="lede mt-6 max-w-lg">
            Next visit, the priorities might be completely different. Your Wifey service should work
            around your home — not the other way around.
          </p>
          <BookLink variant="ink" className="mt-9">
            Book my Wifey visit
          </BookLink>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={120}>
          <div className="mx-auto max-w-md rotate-[-1.2deg] bg-white p-8 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] md:p-10">
            <p className="eyebrow">Today&apos;s Wifey list</p>
            <ul className="mt-6 space-y-4">
              {list.map((l) => (
                <li key={l} className="flex items-center gap-4 border-b border-ink/10 pb-4">
                  <span aria-hidden className="font-display text-xl leading-none text-pink">
                    ✓
                  </span>
                  <span className="text-lg text-ink/80">{l}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-lg italic leading-snug text-ink/50">
              …and whatever else matters this week.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- WHO WE HELP --------------------------- */

const WHO = [
  {
    t: "Busy families",
    d: "Work, school, sport, dinner, washing and cleaning can quickly consume the week. Let us take some of the household workload off your shoulders.",
  },
  {
    t: "Working professionals",
    d: "Your weekends weren't designed for scrubbing showers and catching up on laundry. Come home to fewer jobs waiting for you.",
  },
  {
    t: "Seniors",
    d: "Need an extra pair of hands keeping the home clean, tidy and organised? Talk to us about regular household assistance.",
  },
  {
    t: "People needing temporary help",
    d: "Sometimes life changes and you simply need extra assistance around the home. Ask about one-off or short-term services.",
  },
  {
    t: "NDIS participants",
    d: "We welcome eligible self-managed and plan-managed NDIS participants requiring appropriate household assistance.",
  },
  {
    t: "DVA clients",
    d: "We welcome eligible DVA clients requiring approved household services.",
  },
];

export function WhoWeHelp({ heading = true }: { heading?: boolean }) {
  return (
    <section id="who-we-help" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      {heading && (
        <Reveal>
          <SectionLabel>Who we help</SectionLabel>
          <h2 className="display-lg mt-6 max-w-2xl">Who we help</h2>
        </Reveal>
      )}

      <div className={`grid gap-x-14 gap-y-10 md:grid-cols-2 ${heading ? "mt-14" : ""}`}>
        {WHO.map((w, i) => (
          <Reveal key={w.t} delay={i * 50} className="border-t border-ink/15 pt-6">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-pink">
              {w.t}
            </h3>
            <p className="mt-3 max-w-lg leading-relaxed text-ink/70">{w.d}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 border-t-2 border-pink pt-8">
        <h3 className="font-display text-3xl leading-tight md:text-5xl">
          Anyone who hates housework.
        </h3>
        <p className="lede mt-4 max-w-xl">
          You don&apos;t need an excuse. If you&apos;d rather spend your time doing something else,
          that&apos;s reason enough.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BookLink />
          <EnquiryLink />
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------- REGULAR SERVICE -------------------------- */

export function RegularService() {
  const options = [
    {
      t: "Weekly Wifey",
      d: "Perfect for busy households wanting consistent help keeping everything under control.",
    },
    {
      t: "Fortnightly Wifey",
      d: "A popular option for households wanting regular help without a weekly service.",
    },
    {
      t: "One-off Wifey",
      d: "Great for getting back on top of things, preparing for visitors, moving, a home reset, or simply trying Hire a Wifey before considering a regular service.",
    },
  ];
  return (
    <section className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Regular service</SectionLabel>
            <h2 className="display-lg mt-6">
              Meet your new
              <br />
              favourite day
              <br />
              of the week.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:pt-10" delay={90}>
            <p className="lede">
              Imagine knowing your Wifey is coming every week or fortnight. The house doesn&apos;t
              get completely out of control. The bathrooms get cleaned. The floors get done. The
              beds can be changed. The washing can be folded.
            </p>
            <p className="lede mt-4">And you don&apos;t lose half your weekend catching up.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
          {options.map((o, i) => (
            <Reveal key={o.t} delay={i * 70} className="flex flex-col bg-white p-8 md:p-10">
              <span className="font-display text-sm text-pink">0{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl leading-tight">{o.t}</h3>
              <p className="mt-4 leading-relaxed text-ink/65">{o.d}</p>
            </Reveal>
          ))}
        </div>

        <BookLink className="mt-12">Check booking availability</BookLink>
      </div>
    </section>
  );
}

/* --------------------------- WHY CHOOSE --------------------------- */

const REASONS = [
  "Cleaning and housekeeping in one flexible service.",
  "Choose the jobs that matter to you.",
  "One-off, weekly and fortnightly options.",
  "Friendly, customer-focused Wifeys.",
  "Equipment and cleaning supplies provided where applicable.",
  "Fully insured.",
  "Wifeys with current police checks.",
  "Regular household assistance.",
  "NDIS clients welcome.",
  "DVA clients welcome.",
  "Local Hervey Bay service.",
  "More than just cleaning.",
];

export function WhyChoose() {
  return (
    <section className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Why us</SectionLabel>
            <h2 className="display-lg mt-6">
              Why choose
              <br />
              Hire a Wifey?
            </h2>
            <div className="mt-10 border-t-2 border-pink pt-7">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Most importantly, we listen.
              </p>
              <p className="lede mt-4 max-w-md">
                Every household is different. We want to understand what you need and provide a
                service that genuinely makes your week easier.
              </p>
              <BookLink className="mt-8" />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={90}>
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <li key={r} className="flex gap-4 border-b border-ink/12 py-4">
                  <span className="pt-1 font-display text-xs text-pink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.02rem] text-ink/75">{r}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- NDIS / DVA -------------------------- */

export function Ndis() {
  const ndisItems = [
    "Cleaning",
    "Laundry",
    "Ironing",
    "Changing / making beds",
    "Dishes",
    "Household organisation",
    "General household tasks",
    "Meal preparation",
    "Other appropriate household assistance",
  ];
  return (
    <section id="ndis" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel>NDIS</SectionLabel>
          <h2 className="display-md mt-6">
            NDIS cleaning &amp; household
            <br />
            assistance Hervey Bay
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={80}>
          <p className="lede max-w-xl">
            Hire a Wifey welcomes eligible self-managed and plan-managed NDIS participants.
          </p>
          <p className="lede mt-4 max-w-xl">
            Depending on the participant&apos;s individual plan, funding and approved supports,
            household assistance may include:
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {ndisItems.map((n) => (
              <li
                key={n}
                className="text-sm text-ink/70 before:mr-2 before:text-pink before:content-['·']"
              >
                {n}
              </li>
            ))}
          </ul>
          <p className="lede mt-6 max-w-xl">
            Every participant has different needs. Tell us what household assistance you&apos;re
            looking for and how the plan is managed, and we&apos;ll discuss how we may be able to
            assist.
          </p>
          <EnquiryLink variant="ink" className="mt-8">
            NDIS enquiry
          </EnquiryLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Dva() {
  return (
    <section id="dva" className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>DVA</SectionLabel>
            <h2 className="display-md mt-6">
              DVA household
              <br />
              services Hervey Bay
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <p className="lede max-w-xl">
              Hire a Wifey welcomes eligible Department of Veterans&apos; Affairs clients requiring
              approved household assistance.
            </p>
            <p className="lede mt-4 max-w-xl">
              We believe household help should be reliable, respectful and easy to arrange. If you
              receive DVA household assistance, contact us and tell us what services have been
              approved. We&apos;ll discuss your requirements and whether we&apos;re able to provide
              the services you need.
            </p>
            <EnquiryLink className="mt-8">DVA enquiry</EnquiryLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- SERVICE AREA --------------------------- */

export function ServiceArea({ compact = false }: { compact?: boolean }) {
  return (
    <section id="service-area" className="bg-ink text-white">
      <div className="mx-auto grid items-start gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-12 xl:mx-auto xl:max-w-[1220px]">
        <Reveal className="lg:col-span-5">
          <SectionLabel>Service area</SectionLabel>
          <h2 className="display-lg mt-6 text-white">
            Your local
            <br />
            Hervey Bay
            <br />
            Wifeys.
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-white/70">
            Hire a Wifey provides home cleaning, housekeeping and household assistance throughout
            Hervey Bay and surrounding communities.
          </p>
          {compact ? (
            <Link to="/service-area" className="btn btn-outline-light mt-9">
              See the full service area
            </Link>
          ) : (
            <BookLink className="mt-9" />
          )}
        </Reveal>

        <Reveal className="lg:col-span-7" delay={90}>
          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
            {SUBURBS.map((s) => (
              <li
                key={s}
                className="border-b border-white/15 py-3 font-display text-lg leading-snug text-white/85 md:text-xl"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60">
            Don&apos;t see your suburb listed?{" "}
            <Link to="/contact" hash="enquiry" className="text-pink underline underline-offset-4">
              Make an enquiry
            </Link>{" "}
            — our service area may continue to expand.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- HOW IT WORKS -------------------------- */

const STEPS = [
  {
    n: "01",
    t: "Tell us what you need",
    d: "Choose a booking or make an enquiry and tell us about your home and what you'd like help with.",
  },
  {
    n: "02",
    t: "Choose your service",
    d: "One-off, weekly or fortnightly. Tell us your preferred days and times.",
  },
  {
    n: "03",
    t: "Set your priorities",
    d: "Cleaning? Washing? Beds? Dishes? Tell us what matters most.",
  },
  {
    n: "04",
    t: "Your Wifey gets to work",
    d: "Your Wifey takes care of the agreed household tasks during the booked service.",
  },
  { n: "05", t: "Enjoy your time back", d: "That's the best part." },
];

export function HowItWorks({ heading = true }: { heading?: boolean }) {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      {heading && (
        <Reveal className="max-w-2xl">
          <SectionLabel>The process</SectionLabel>
          <h2 className="display-lg mt-6">How it works</h2>
        </Reveal>
      )}

      <div className={heading ? "mt-14" : ""}>
        {STEPS.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 60}
            className="grid items-baseline gap-x-10 gap-y-2 border-t border-ink/15 py-8 md:grid-cols-12"
          >
            <span className="font-display text-4xl leading-none text-pink md:col-span-2 md:text-6xl">
              {s.n}
            </span>
            <h3 className="font-display text-2xl leading-tight md:col-span-4 md:text-3xl">{s.t}</h3>
            <p className="leading-relaxed text-ink/65 md:col-span-6">{s.d}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <BookLink />
        <EnquiryLink>Ask us a question</EnquiryLink>
      </div>
    </section>
  );
}

/* --------------------------- TIME BACK ---------------------------- */

export function TimeBack() {
  const things = [
    "Spend more time with your kids.",
    "Take the dog to the beach.",
    "Have lunch with friends.",
    "Work on your business.",
    "Go to the gym.",
    "Spend time with your partner.",
    "Or do absolutely nothing.",
  ];
  return (
    <section className="relative">
      <img
        src={timeImg}
        alt="A woman relaxing with a cup of tea in her clean, sunlit Hervey Bay living room"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/25" />
      <div className="relative mx-auto max-w-[1220px] px-6 py-24 md:px-12 md:py-32">
        <Reveal className="max-w-2xl text-white">
          <p className="eyebrow">The real product is time</p>
          <h2 className="display-lg mt-5 text-white">
            What would you do
            <br />
            with your time back?
          </h2>
          <ul className="mt-8 space-y-1.5 text-white/85">
            {things.map((t) => (
              <li key={t} className="text-[1.05rem]">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-white/70">
            Your free time is valuable. Don&apos;t spend all of it cleaning.
          </p>
          <p className="mt-6 font-display text-2xl leading-snug tracking-wide text-pink md:text-3xl">
            We take care of home.
          </p>
          <BookLink className="mt-8">Get my time back</BookLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- REVIEWS ----------------------------- */

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      <Reveal className="max-w-2xl">
        <SectionLabel>Reviews</SectionLabel>
        <h2 className="display-md mt-6">
          Don&apos;t just take
          <br />
          our word for it.
        </h2>
        <p className="lede mt-6">See what our customers say about their Wifeys.</p>
      </Reveal>

      {REVIEWS.length > 0 ? (
        <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={`${r.name}-${r.text.slice(0, 12)}`} className="bg-cream p-8">
              <div className="text-pink" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(r.rating)}
                <span className="text-ink/20">{"★".repeat(5 - r.rating)}</span>
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
                {r.name}
                {r.suburb ? ` — ${r.suburb}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <Reveal className="mt-12 border border-dashed border-ink/25 p-10 text-center md:p-14">
          <p className="font-display text-2xl leading-snug">
            Real reviews from real Hervey Bay homes.
          </p>
          <p className="lede mx-auto mt-4 max-w-lg">
            We&apos;d rather show you nothing than make something up. Genuine customer reviews will
            appear here as they come in.
          </p>
          <p className="mt-6 text-sm text-ink/50">
            Recently had a Wifey?{" "}
            <Link to="/contact" hash="enquiry" className="text-pink underline underline-offset-4">
              Tell us how it went.
            </Link>
          </p>
        </Reveal>
      )}
    </section>
  );
}

/* ------------------------------ FAQS ------------------------------ */

export function Faqs({ limit }: { limit?: number }) {
  const list = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <section id="faqs" className="border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel>Answers</SectionLabel>
            <h2 className="display-md mt-6">
              Frequently
              <br />
              asked questions
            </h2>
            {limit ? (
              <Link to="/faqs" className="btn btn-ink mt-8">
                Read all {FAQS.length} questions
              </Link>
            ) : (
              <BookLink className="mt-8" />
            )}
          </Reveal>

          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {list.map((f) => (
                <details key={f.q} className="group border-b border-ink/15">
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-5 marker:hidden">
                    <h3 className="text-[1.02rem] font-semibold leading-snug transition-colors group-hover:text-pink">
                      {f.q}
                    </h3>
                    <span className="ml-auto shrink-0 text-lg leading-none text-ink/40 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- ENQUIRY ----------------------------- */

export function EnquirySection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="enquiry" className="scroll-mt-24 bg-blush/70">
      <div className="mx-auto grid items-start gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 xl:mx-auto xl:max-w-[1220px]">
        <Reveal className="lg:col-span-4">
          {showHeading && (
            <>
              <SectionLabel>Enquiries</SectionLabel>
              <h2 className="display-md mt-6 mb-6">
                Still have a question?
                <br />
                Talk to us.
              </h2>
            </>
          )}
          <p className="lede max-w-sm">
            Not sure what to book, got an unusual job, or want to chat about NDIS or DVA household
            assistance? Send us a note and we&apos;ll come back to you.
          </p>

          <div className="mt-10 space-y-5 border-t border-ink/20 pt-8">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
                Email
              </p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all hover:text-pink">
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
                Phone
              </p>
              <a
                href={CONTACT.phoneHref}
                className="mt-1 block font-display text-3xl leading-snug hover:text-pink"
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={90}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- IMAGINE THIS -------------------------- */

export function ImagineThis() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-12 md:py-32">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Imagine this…</p>
          <h2 className="display-lg mt-6 text-white">You get home.</h2>
          <div className="mt-10 grid gap-x-16 gap-y-2 sm:grid-cols-2">
            {[
              "The floors are done.",
              "The bathrooms are clean.",
              "The kitchen is tidy.",
              "The beds are fresh.",
              "The washing is folded.",
            ].map((l) => (
              <p key={l} className="border-b border-white/15 py-3 text-lg text-white/80">
                {l}
              </p>
            ))}
          </div>
          <p className="mt-10 text-lg text-white/75">
            And instead of starting another list of chores…
          </p>
          <p className="mt-3 font-display text-3xl leading-tight text-white md:text-5xl">
            You&apos;re finished for the day.
          </p>
          <p className="mt-10 max-w-xl text-lg text-white/75">
            That&apos;s what Hire a Wifey is really selling. Not just cleaning.{" "}
            <span className="text-pink">Time.</span> Time with your family. Time for yourself. Time
            to enjoy your home instead of constantly maintaining it.
          </p>
          <p className="mt-6 text-lg text-white/75">Let us take something off your plate.</p>

          <p className="mt-14 font-display text-4xl leading-[1.08] md:text-6xl">
            Hire a Wifey.
            <br />
            <span className="text-pink">We take care of home.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookLink>Book a Wifey now</BookLink>
            <EnquiryLink variant="light">Have a question?</EnquiryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- RECRUITMENT --------------------------- */

export function RecruitmentTeaser() {
  return (
    <section id="recruitment" className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-24">
      <Reveal className="grid items-start gap-10 border-t-2 border-pink pt-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel>Careers</SectionLabel>
          <h2 className="display-md mt-6">
            Want to become
            <br />a Wifey?
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="lede max-w-2xl">
            We&apos;re growing Hire a Wifey and we&apos;re looking for great people to join us.
            We&apos;re interested in both experienced cleaners and people who may be new to
            professional cleaning but have the right attitude.
          </p>
          <p className="mt-6 max-w-2xl text-ink/70">
            Reliable, friendly, take pride in your work and understand that the little things
            matter? We&apos;d like to hear from you.
          </p>
          <Link to="/recruitment" className="btn btn-ink mt-8">
            Become a Wifey
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
