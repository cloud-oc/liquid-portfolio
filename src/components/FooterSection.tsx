import { ArrowUpRight } from "lucide-react";
import { ContactButton } from "./ContactButton";
import { friendLinks, profile } from "../content/portfolio";

const START_YEAR = 2026;

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear > START_YEAR ? `${START_YEAR} - ${currentYear}` : `${START_YEAR}`;

  return (
    <footer
      id="contact"
      className="relative min-h-[82dvh] overflow-hidden px-5 pb-10 pt-24 text-white sm:px-8 md:px-10 md:pt-32"
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(82dvh-8rem)] max-w-7xl flex-col justify-between gap-16">
        <div className="max-w-5xl mist-readable">
          <p className="cosmic-heading pb-2 text-[clamp(4rem,13vw,10rem)] leading-[0.86]">
            Build something unforgettable.
          </p>
        </div>
        <div
          id="footer-contact"
          className="liquid-glass overflow-hidden rounded-[1.25rem]"
        >
          <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-8 lg:p-10">
            <p className="cosmic-copy max-w-2xl text-sm font-light leading-relaxed md:text-base">
              Ready to shape a brand, website, render, or motion system with a cinematic edge.
            </p>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <ContactButton />
              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition hover:text-white"
              >
                {profile.contactEmail}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid gap-5 border-t border-white/15 px-6 py-5 text-xs text-white/65 md:grid-cols-[1fr_auto_auto] md:items-center md:px-8 lg:px-10">
            <span>
              © {yearRange} {profile.name}. All Rights Reserved.
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-white/45">友情链接</span>
              {friendLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 transition hover:text-white md:justify-self-end"
            >
              回到顶部
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
