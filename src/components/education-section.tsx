import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section
      id="education"
      className="animate-enter flex scroll-mt-12 flex-col gap-6"
      style={{ "--enter-delay": "320ms" } as React.CSSProperties}
    >
      <h2 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        Education
      </h2>

      <ol className="border-t border-border">
        {education.map((item) => (
          <li
            key={`${item.university}-${item.year}`}
            className="flex flex-col gap-3 border-b border-border py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col">
                <span className="text-[1.0625rem] leading-snug text-foreground">
                  {item.degree}
                </span>
                <span className="text-[0.9375rem] leading-snug text-muted-foreground">
                  {item.university}
                  {item.highlighted && (
                    <>
                      {" · "}
                      <span className="italic">
                        {item.highlighted.description}
                      </span>
                    </>
                  )}
                </span>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground sm:pt-1">
                Class of {item.year}
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-[0.9375rem] leading-relaxed">
              {item.description.map((line) => (
                <li key={line} className="flex gap-3 text-low-contrast-text">
                  <span
                    aria-hidden="true"
                    className="pt-0.5 font-mono text-xs text-muted-foreground"
                  >
                    —
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
