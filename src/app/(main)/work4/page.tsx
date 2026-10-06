import { Oxanium } from "next/font/google";

import { cn } from "@/lib/utils";
import { workExperience } from "@/lib/data";

const oxanium = Oxanium({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Experience",
  description:
    "Rayan Kazi's research, engineering, and teaching experience, most recent first.",
};

export default function ExperiencePage() {
  return (
    <section className="flex flex-col gap-8 py-10">
      <div className="flex flex-col gap-2">
        <h1
          className={cn(
            oxanium.className,
            "text-3xl font-semibold text-foreground",
          )}
        >
          EXPERIENCE
        </h1>
        <p className="text-muted-foreground">
          Research, engineering, and teaching roles, most recent first.
        </p>
      </div>

      <div className="flex flex-col">
        {workExperience.map((item) => (
          <div
            key={`${item.company}-${item.year}`}
            className="grid grid-cols-[20px_1fr] gap-5"
          >
            <div className="flex flex-col items-center" aria-hidden="true">
              <span className="mt-[7px] size-[9px] shrink-0 rounded-full bg-foreground" />
              <span className="w-px flex-1 bg-border" />
            </div>

            <article className="flex flex-col gap-2 pb-9">
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.year}
              </p>
              <header className="flex flex-col gap-0.5">
                <h2 className="text-[17px] font-semibold text-foreground">
                  {item.role}
                </h2>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </header>
              <ul className="flex list-disc flex-col gap-2 pl-5 pt-1 text-sm leading-relaxed text-muted-foreground">
                {item.longBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
