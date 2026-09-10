import { useState, type FormEvent } from "react";
import { CONTACT } from "@/data/site";

const TOPICS = ["General", "Cleaning", "Household Help", "NDIS", "DVA", "Other"];
const CONTACT_METHODS = ["Phone call", "Text message", "Email"];

const fieldClass =
  "w-full border-b border-ink/25 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus:border-pink";

const labelClass =
  "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    setName(get("name").split(" ")[0] || "there");

    const body = [
      `Name: ${get("name")}`,
      `Mobile: ${get("mobile")}`,
      `Email: ${get("email")}`,
      `Suburb: ${get("suburb")}`,
      `Enquiring about: ${get("topic")}`,
      `Preferred contact: ${get("method")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Website enquiry — ${get("name")} (${get("suburb")})`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t-2 border-pink bg-white p-8 md:p-12">
        <p className="eyebrow">Thanks {name}</p>
        <h3 className="display-md mt-4">
          Your enquiry is
          <br />
          on its way.
        </h3>
        <p className="lede mt-5 max-w-md">
          We&apos;ll get back to you as soon as we can. If it&apos;s urgent, give us a call on{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-pink">
            {CONTACT.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-outline mt-8">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t-2 border-pink bg-white p-6 md:p-10">
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name *
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">
            Mobile number *
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            className={fieldClass}
            placeholder="04.."
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="suburb">
            Suburb *
          </label>
          <input
            id="suburb"
            name="suburb"
            required
            className={fieldClass}
            placeholder="Torquay, Urangan..."
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="topic">
            What are you enquiring about?
          </label>
          <select id="topic" name="topic" className={fieldClass} defaultValue="General">
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="method">
            Preferred contact method
          </label>
          <select id="method" name="method" className={fieldClass} defaultValue="Phone call">
            {CONTACT_METHODS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Tell us what you need help with *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder="A bit about your home and the jobs you'd like taken care of."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-ink mt-8 w-full sm:w-auto">
        Send my enquiry
      </button>
    </form>
  );
}
