import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/data/site";

export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-ink/10 bg-cream/95 p-2 backdrop-blur lg:hidden">
      <a
        href={CONTACT.phoneHref}
        className="btn btn-outline flex-1 !py-3 !text-[0.7rem]"
        aria-label={`Call Hire a Wifey on ${CONTACT.phone}`}
      >
        Call Us
      </a>
      <Link to="/booking" className="btn btn-primary flex-[1.6] !py-3 !text-[0.7rem]">
        Book a Wifey
      </Link>
    </div>
  );
}
