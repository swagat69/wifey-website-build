import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/data/site";

const SERVICES = [
  "Cleaning",
  "Housekeeping",
  "Laundry",
  "Ironing",
  "Bed Making",
  "Dishes",
  "Home Organisation",
  "Meal Preparation",
  "Household Help",
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
              Hire a Wifey <span className="text-pink">Hervey Bay</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Professional home cleaning, housekeeping and household assistance throughout Hervey
              Bay.
            </p>
            <p className="mt-5 text-sm">NDIS and DVA clients welcome.</p>
            <p className="eyebrow mt-8">We take care of home.</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-pink">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="font-display text-2xl text-white hover:text-pink">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-white/50">ABN {CONTACT.abn}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link to="/recruitment" className="btn btn-outline-light">
                Become a Wifey
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-[0.72rem] uppercase tracking-[0.16em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Fully Insured | Wifeys with Current Police Checks | NDIS &amp; DVA Clients Welcome</p>
          <p>&copy; {new Date().getFullYear()} Hire a Wifey</p>
        </div>
      </div>
    </footer>
  );
}
