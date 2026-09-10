import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "ink" | "outline" | "light";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ink: "btn-ink",
  outline: "btn-outline",
  light: "btn-outline-light",
};

export function BookLink({
  children = "Book a Wifey",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to="/booking" className={`btn ${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function EnquiryLink({
  children = "Make an enquiry",
  variant = "outline",
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to="/contact"
      hash="enquiry"
      className={`btn ${variantClass[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionLabel({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      {n && <span className="font-display text-sm text-pink">{n}</span>}
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/** Consistent page opener used on every inner page (Jakob's law: same shape everywhere). */
export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-blush/50">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-lg mt-5 max-w-4xl">{title}</h1>
        {intro && <p className="lede mt-6 max-w-2xl">{intro}</p>}
        {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
