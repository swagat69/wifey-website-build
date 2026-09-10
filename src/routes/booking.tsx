import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CONTACT, SUBURBS } from "@/data/site";
import bedImg from "@/assets/bed-making.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Wifey — Cleaning & Household Help Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Book cleaning, housekeeping, laundry, ironing, bed changes or household help in Hervey Bay. One-off, weekly or fortnightly. NDIS and DVA clients welcome.",
      },
      { property: "og:title", content: "Book a Wifey — Hervey Bay" },
      {
        property: "og:description",
        content:
          "Tell us about your home and the jobs that matter most. One-off, weekly or fortnightly household help in Hervey Bay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const FREQUENCIES = ["One-off", "Weekly", "Fortnightly", "Not sure yet"];
const PRIORITIES = [
  "Cleaning",
  "Bathrooms",
  "Floors (vacuum & mop)",
  "Laundry",
  "Ironing",
  "Bed making & linen",
  "Dishes & kitchen reset",
  "Home organisation",
  "Meal preparation",
  "Move in / move out",
  "Airbnb changeover",
  "NDIS household assistance",
  "DVA household assistance",
];

const field =
  "w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus:border-pink";
const label = "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50";

function BookingPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const jobs = data.getAll("priorities").join(", ");

    const body = [
      `Name: ${get("name")}`,
      `Mobile: ${get("mobile")}`,
      `Email: ${get("email")}`,
      `Address / suburb: ${get("suburb")}`,
      `Home size: ${get("size")}`,
      `Service: ${get("frequency")}`,
      `Preferred days/times: ${get("when")}`,
      `Priorities: ${jobs}`,
      "",
      get("notes"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Booking request — ${get("name")} (${get("suburb")})`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Booking</p>
            <h1 className="display-lg mt-5">
              Book
              <br />
              a Wifey.
            </h1>
            <p className="lede mt-7 max-w-md">
              Tell us about your home and the jobs that matter most. We&apos;ll be in touch to
              confirm a time and how long to book for.
            </p>

            <div className="mt-10 space-y-5 border-t border-ink/20 pt-8">
              <div>
                <p className={label}>Prefer to talk?</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block font-display text-3xl hover:text-pink"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className={label}>Email</p>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all hover:text-pink">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <img
              src={bedImg}
              alt="Fresh linen being smoothed onto a bed"
              width={1000}
              height={1250}
              loading="lazy"
              className="mt-10 hidden aspect-[4/3] w-full object-cover lg:block"
            />
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="border-t-2 border-pink bg-white p-8 md:p-12">
                <p className="eyebrow">Booking request sent</p>
                <h2 className="display-md mt-4">
                  Lovely. We&apos;ll
                  <br />
                  be in touch.
                </h2>
                <p className="lede mt-5 max-w-md">
                  We&apos;ll confirm your day, time and how long to book for. If you&apos;d rather
                  sort it now, call{" "}
                  <a href={CONTACT.phoneHref} className="font-semibold text-pink">
                    {CONTACT.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border-t-2 border-pink bg-white p-6 md:p-10">
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="name">
                      Name *
                    </label>
                    <input id="name" name="name" required className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="mobile">
                      Mobile number *
                    </label>
                    <input id="mobile" name="mobile" type="tel" required className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="email">
                      Email
                    </label>
                    <input id="email" name="email" type="email" className={field} />
                  </div>
                  <div>
                    <label className={label} htmlFor="suburb">
                      Suburb *
                    </label>
                    <input
                      id="suburb"
                      name="suburb"
                      required
                      list="suburbs"
                      className={field}
                      placeholder="Torquay, Urangan…"
                    />
                    <datalist id="suburbs">
                      {SUBURBS.map((s) => (
                        <option key={s} value={s} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label className={label} htmlFor="size">
                      Home size
                    </label>
                    <input
                      id="size"
                      name="size"
                      className={field}
                      placeholder="e.g. 3 bed, 2 bath"
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="frequency">
                      Service *
                    </label>
                    <select id="frequency" name="frequency" className={field} defaultValue="One-off">
                      {FREQUENCIES.map((f) => (
                        <option key={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="when">
                      Preferred days &amp; times
                    </label>
                    <input
                      id="when"
                      name="when"
                      className={field}
                      placeholder="e.g. Tuesday mornings"
                    />
                  </div>
                </div>

                <fieldset className="mt-10">
                  <legend className={label}>What would you like taken care of?</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PRIORITIES.map((p) => (
                      <label
                        key={p}
                        className="cursor-pointer border border-ink/20 px-3 py-2 text-sm transition-colors has-[:checked]:border-pink has-[:checked]:bg-pink has-[:checked]:text-white"
                      >
                        <input type="checkbox" name="priorities" value={p} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8">
                  <label className={label} htmlFor="notes">
                    Anything else we should know?
                  </label>
                  <textarea id="notes" name="notes" rows={4} className={`${field} resize-none`} />
                </div>

                <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
                  Send booking request
                </button>
                <p className="mt-4 text-xs text-ink/45">
                  Sending a request doesn&apos;t lock in a time — we&apos;ll confirm with you first.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
