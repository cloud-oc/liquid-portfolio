import { ArrowUpRight } from "lucide-react";
import { AudioToggle } from "./AudioToggle";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";
import { BlurText } from "./BlurText";
import { navLinks, profile } from "../content/portfolio";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <FadeIn
        as="nav"
        immediate
        y={-20}
        className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a
            href="#"
            aria-label={`${profile.name} home`}
            className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full font-heading text-3xl italic leading-none text-white"
          >
            {profile.name.charAt(0).toLowerCase()}
          </a>

          <ul className="liquid-glass hidden items-center gap-1 rounded-full px-1.5 py-1.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <AudioToggle />
        </div>
      </FadeIn>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center mist-readable">
        <FadeIn
          immediate
          delay={0.35}
          y={20}
          className="liquid-glass mb-5 inline-flex max-w-full items-center gap-2 rounded-full px-2 py-1"
        >
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
            Portfolio
          </span>
          <span className="pr-3 text-sm font-light text-white/90">
            Selected digital work, motion, branding, and web experiences
          </span>
        </FadeIn>

        <BlurText
          text={profile.heroTitle}
          className="cosmic-heading max-w-3xl justify-center pb-1 text-[clamp(5rem,17vw,9rem)] leading-[0.82]"
        />

        <FadeIn
          as="p"
          immediate
          delay={0.75}
          y={20}
          className="cosmic-copy mt-5 max-w-2xl text-sm font-light leading-tight md:text-base"
        >
          {profile.heroDescription}
        </FadeIn>

        <FadeIn
          immediate
          delay={1}
          y={18}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <ContactButton />
          <a
            href="#projects"
            className="liquid-glass inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-white/10 active:scale-[0.98]"
          >
            View Projects
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </FadeIn>
      </div>

      <FadeIn
        immediate
        delay={1.2}
        y={18}
        className="relative z-10 flex flex-col items-center gap-4 px-5 pb-8 text-center mist-readable"
      >
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
          Available for selected creative commissions
        </span>
        <div className="flex max-w-full flex-wrap justify-center gap-x-10 gap-y-2 font-heading text-2xl italic leading-none text-white md:gap-x-14 md:text-3xl">
          <span>Branding</span>
          <span>Web Design</span>
          <span>Motion</span>
          <span>Rendering</span>
        </div>
      </FadeIn>
    </section>
  );
}
