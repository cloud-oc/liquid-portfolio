import { LiveProjectButton } from "./LiveProjectButton";
import { FadeIn } from "./FadeIn";
import { Project, projects } from "../content/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.08} y={36}>
      <article
        className="liquid-glass overflow-hidden rounded-[1.25rem] p-4 sm:p-6 md:p-8"
      >
        <div className="grid gap-5 pb-6 md:grid-cols-[auto_0.3fr_1fr_auto] md:items-end md:gap-7 md:pb-8">
          <span className="font-heading text-[clamp(3.2rem,9vw,8rem)] italic leading-none text-white">
            {project.number}
          </span>
          <p className="liquid-glass w-fit rounded-full px-3 py-1 text-xs font-light text-white/80 sm:text-sm">
            {project.category}
          </p>
          <h3 className="font-heading text-[clamp(2.6rem,6vw,5.8rem)] italic leading-[0.88] tracking-[-0.03em] text-white">
            {project.name}
          </h3>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        <div className="grid gap-4 md:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-4">
            <img
              src={project.images.leftTop.src}
              alt={project.images.leftTop.alt}
              className="glass-media h-[clamp(130px,16vw,230px)] w-full rounded-[1.25rem] object-cover"
              loading="lazy"
            />
            <img
              src={project.images.leftBottom.src}
              alt={project.images.leftBottom.alt}
              className="glass-media h-[clamp(160px,22vw,340px)] w-full rounded-[1.25rem] object-cover"
              loading="lazy"
            />
          </div>
          <img
            src={project.images.featured.src}
            alt={project.images.featured.alt}
            className="glass-media h-[360px] w-full rounded-[1.25rem] object-cover sm:h-[520px] md:h-full md:min-h-[520px]"
            loading="lazy"
          />
        </div>
      </article>
    </FadeIn>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-24 sm:px-8 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/20 md:inset-x-16" />
      <FadeIn
        as="h2"
        className="cosmic-heading mb-14 pb-2 text-center text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.9] sm:mb-20"
      >
        Projects
      </FadeIn>
      <div className="mx-auto grid max-w-7xl gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
