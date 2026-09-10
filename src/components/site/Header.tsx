import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.asset.json";
import { NAV } from "@/data/nav";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur transition-[padding] duration-300 ease-out ${
        compact ? "py-2" : "py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-[1220px] items-center gap-6 px-6 md:px-12">
        <Link to="/" aria-label="Hire a Wifey — home" className="shrink-0">
          <img
            src={logo.url}
            alt="Hire a Wifey — we take care of home"
            width={220}
            height={160}
            className={`w-auto transition-all duration-300 ease-out ${
              compact ? "h-10 md:h-11" : "h-12 md:h-16"
            }`}
          />
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-pink" }}
              className="text-[0.8rem] font-semibold tracking-[0.03em] text-ink/75 transition-colors hover:text-pink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/recruitment"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink/45 transition-colors hover:text-pink"
          >
            Become a Wifey
          </Link>
          <Link to="/booking" className="btn btn-primary !px-6 !py-3 !text-[0.72rem]">
            Book a Wifey
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:hidden">
          <Link to="/booking" className="btn btn-primary !px-4 !py-3 !text-[0.68rem]">
            Book Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-ink/20 transition-colors hover:border-pink"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      </header>

      <div
        className={`fixed inset-x-0 bottom-0 top-[76px] z-[45] overflow-y-auto bg-cream px-6 pb-32 pt-4 transition-all duration-300 ease-out xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-pink" }}
              className="border-b border-ink/10 py-4 font-display text-2xl"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/recruitment"
            className="border-b border-ink/10 py-4 font-display text-2xl text-pink"
          >
            Become a Wifey
          </Link>
        </nav>
      </div>
    </>
  );
}
