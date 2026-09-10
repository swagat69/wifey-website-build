import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.asset.json";

const NAV = [
  { label: "What We Do", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "NDIS & DVA", href: "/#ndis" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQs", href: "/#faqs" },
];

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-[padding,box-shadow] duration-300 ${
        compact ? "py-2 shadow-[0_1px_0_0_var(--stone)]" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 md:px-10">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Hire a Wifey — we take care of home"
            width={220}
            height={160}
            className={`w-auto transition-all duration-300 ${compact ? "h-9 md:h-10" : "h-11 md:h-14"}`}
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.8rem] font-semibold tracking-[0.06em] text-ink/75 transition-colors hover:text-pink"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/recruitment"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/45 transition-colors hover:text-pink"
          >
            Become a Wifey
          </Link>
          <Link to="/booking" className="btn btn-primary !px-5 !py-3 !text-[0.72rem]">
            Book a Wifey
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <Link to="/booking" className="btn btn-primary !px-4 !py-2.5 !text-[0.68rem]">
            Book Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-ink/20"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto border-t bg-cream px-6 pb-28 pt-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#enquiry"
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-display text-2xl"
            >
              Make an Enquiry
            </a>
            <Link
              to="/recruitment"
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-display text-2xl text-pink"
            >
              Become a Wifey
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
