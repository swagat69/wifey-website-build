import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/data/site";
import { NAV } from "@/data/nav";

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
      <div className="mx-auto max-w-[1220px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl leading-tight text-white">
              Hire a Wifey <span className="text-pink">Hervey Bay</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Professional home cleaning, housekeeping and household assistance throughout Hervey
              Bay.
            </p>
            <p className="mt-4 text-sm">NDIS and DVA clients welcome.</p>
            <p className="eyebrow mt-7">We take care of home.</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Pages
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-pink">
                  Home
                </Link>
              </li>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-pink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/booking" className="transition-colors hover:text-pink">
                  Book a Wifey
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="transition-colors hover:text-pink">
                  Become a Wifey
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-pink">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="font-display text-2xl leading-snug text-white hover:text-pink"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-white/50">ABN {CONTACT.abn}</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-[0.72rem] uppercase tracking-[0.16em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Fully Insured | Wifeys with Current Police Checks | NDIS &amp; DVA Clients Welcome</p>
          <p>&copy; {new Date().getFullYear()} Hire a Wifey</p>
        </div>
      </div>
    </footer>
  );
}
