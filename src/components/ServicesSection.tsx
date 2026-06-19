import { FadeIn } from "./FadeIn";
import { Service, services } from "../content/portfolio";

function serviceTag(service: Service) {
  const tags: Record<string, string> = {
    "3D Modeling": "Spatial craft",
    Rendering: "Light study",
    "Motion Design": "Kinetic system",
    Branding: "Identity work",
    "Web Design": "Digital surface",
  };

  return tags[service.name] ?? "Creative service";
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/20 md:inset-x-16" />
      <FadeIn
        as="h2"
        className="cosmic-heading mx-auto mb-16 max-w-5xl pb-2 text-center text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.9] sm:mb-20 md:mb-24"
      >
        Services
      </FadeIn>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {services.slice(0, 3).map((service, index) => (
          <FadeIn
            key={service.name}
            immediate
            delay={index * 0.1}
            className="liquid-glass flex min-h-[300px] flex-col rounded-[1.25rem] p-6 md:min-h-[360px]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-white text-sm font-semibold text-black">
                {service.number}
              </span>
              <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-light text-white/90">
                {serviceTag(service)}
              </span>
            </div>
            <div className="mt-auto pt-12">
              <h3 className="font-heading text-3xl italic leading-none tracking-[-0.02em] text-white md:text-4xl">
                {service.name}
              </h3>
              <p className="cosmic-copy mt-4 max-w-[32ch] text-sm font-light leading-snug">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {services.slice(3).map((service, index) => (
          <FadeIn
            key={`${service.name}-wide`}
            immediate
            delay={(index + 3) * 0.1}
            className="liquid-glass flex min-h-[260px] flex-col rounded-[1.25rem] p-6 md:min-h-[300px]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-[0.75rem] bg-white text-sm font-semibold text-black">
                {service.number}
              </span>
              <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-light text-white/90">
                {serviceTag(service)}
              </span>
            </div>
            <div className="mt-auto pt-12">
              <h3 className="font-heading text-3xl italic leading-none tracking-[-0.02em] text-white md:text-4xl">
                {service.name}
              </h3>
              <p className="cosmic-copy mt-4 max-w-[42ch] text-sm font-light leading-snug">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
