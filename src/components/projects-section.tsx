import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="animate-enter flex scroll-mt-12 flex-col gap-6"
      style={{ "--enter-delay": "400ms" } as React.CSSProperties}
    >
      <h2 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        Projects
      </h2>

      <ol className="border-t border-border">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col gap-3 border-b border-border py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col">
                <span className="text-[1.0625rem] leading-snug text-foreground">
                  {project.title}
                </span>
                <span className="text-[0.9375rem] leading-snug text-muted-foreground">
                  {project.description}
                </span>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground sm:pt-1">
                {project.year}
              </span>
            </div>

            {(project.tech.length > 0 || project.links.length > 0) && (
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span>{project.tech.join(" · ")}</span>
                {project.links.length > 0 && (
                  <ul className="flex gap-4">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} ${link.label.toLowerCase()}`}
                          className="group inline-flex items-center gap-1 transition-colors hover:text-foreground"
                        >
                          {link.label}
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          >
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
