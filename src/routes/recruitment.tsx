import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { CONTACT, SUBURBS } from "@/data/site";
import heroImg from "@/assets/hero-laundry.jpg";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Become a Wifey — Cleaning Jobs Hervey Bay | Hire a Wifey" },
      {
        name: "description",
        content:
          "Join Hire a Wifey in Hervey Bay. We're looking for reliable, friendly people — experienced cleaners and those new to the work. Training and support can be provided.",
      },
      { property: "og:title", content: "Become a Wifey — Hervey Bay" },
      {
        property: "og:description",
        content:
          "Reliable, friendly and take pride in your work? We'd like to hear from you. Casual and permanent opportunities may be available.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/recruitment" },
    ],
    links: [{ rel: "canonical", href: "/recruitment" }],
  }),
  component: RecruitmentPage,
});

const field =
  "w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus:border-pink";
const label = "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50";

function RecruitmentPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Mobile: ${get("mobile")}`,
      `Email: ${get("email")}`,
      `Suburb: ${get("suburb")}`,
      `Experience: ${get("experience")}`,
      `Availability: ${get("availability")}`,
      `Drivers licence & car: ${get("transport")}`,
      "",
      get("about"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Become a Wifey — ${get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Layout>
        <section className="mx-auto max-w-[1220px] px-6 py-14 md:px-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">Careers at Hire a Wifey</p>
              <h1 className="display-lg mt-5">
                Want to become
                <br />
                <span className="text-pink">a Wifey?</span>
              </h1>
              <p className="lede mt-7 max-w-lg">
                We&apos;re growing Hire a Wifey and we&apos;re looking for great people to join us.
                We&apos;re interested in both experienced cleaners and people who may be new to
                professional cleaning but have the right attitude.
              </p>

              <h2 className="mt-12 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink/50">
                What matters to us
              </h2>
              <ul className="mt-4 max-w-md divide-y divide-ink/12 border-y border-ink/12">
                {[
                  "Being reliable",
                  "Being friendly",
                  "Taking pride in your work",
                  "Caring about customers",
                  "Understanding that the little things matter",
                ].map((i) => (
                  <li key={i} className="py-3 text-ink/75">
                    {i}
                  </li>
                ))}
              </ul>

              <p className="lede mt-8 max-w-lg">
                Training and support can be provided, with casual and permanent opportunities
                potentially available depending on current requirements.
              </p>

              <div className="mt-10 border-t-2 border-pink pt-7">
                <p className="font-display text-2xl">Experienced cleaner?</p>
                <p className="mt-2 text-ink/70">We&apos;d especially love to hear from you.</p>
                <p className="mt-6 font-display text-2xl">No professional experience?</p>
                <p className="mt-2 max-w-lg text-ink/70">
                  Don&apos;t automatically count yourself out. If you&apos;re enthusiastic,
                  dependable and willing to learn, we&apos;d still like to hear from you.
                </p>
              </div>

              <img
                src={heroImg}
                alt="A Hire a Wifey team member folding laundry in a Hervey Bay home"
                width={1408}
                height={1760}
                loading="lazy"
                className="mt-12 hidden aspect-[4/3] w-full object-cover lg:block"
              />
            </div>

            <div className="lg:col-span-6">
              {sent ? (
                <div className="border-t-2 border-pink bg-white p-8 md:p-12">
                  <p className="eyebrow">Application sent</p>
                  <h2 className="display-md mt-4">Thanks for reaching out.</h2>
                  <p className="lede mt-5 max-w-md">
                    We&apos;ll read every application and get back to you if there&apos;s a role
                    that suits.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border-t-2 border-pink bg-white p-6 md:p-10"
                >
                  <h2 className="font-display text-2xl">Tell us about you</h2>
                  <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
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
                        Email *
                      </label>
                      <input id="email" name="email" type="email" required className={field} />
                    </div>
                    <div>
                      <label className={label} htmlFor="suburb">
                        Suburb *
                      </label>
                      <input id="suburb" name="suburb" required list="suburbs" className={field} />
                      <datalist id="suburbs">
                        {SUBURBS.map((s) => (
                          <option key={s} value={s} />
                        ))}
                      </datalist>
                    </div>
                    <div>
                      <label className={label} htmlFor="experience">
                        Cleaning experience
                      </label>
                      <select id="experience" name="experience" className={field} defaultValue="Some experience">
                        <option>Experienced cleaner</option>
                        <option>Some experience</option>
                        <option>New to cleaning</option>
                      </select>
                    </div>
                    <div>
                      <label className={label} htmlFor="availability">
                        Availability
                      </label>
                      <input
                        id="availability"
                        name="availability"
                        className={field}
                        placeholder="e.g. weekday mornings"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="transport">
                        Driver&apos;s licence &amp; reliable car?
                      </label>
                      <select id="transport" name="transport" className={field} defaultValue="Yes">
                        <option>Yes</option>
                        <option>Licence, no car</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="about">
                        Why would you be a great Wifey? *
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        required
                        rows={5}
                        className={`${field} resize-none`}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-ink mt-8 w-full sm:w-auto">
                    Send my application
                  </button>
                  <p className="mt-4 text-xs text-ink/45">
                    Or email us directly at{" "}
                    <a href={`mailto:${CONTACT.email}`} className="text-pink">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
    </Layout>
  );
}
