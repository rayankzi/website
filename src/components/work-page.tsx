import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { workExperience } from "@/lib/data";

type WorkConcept = 1 | 2 | 3;
type Experience = (typeof workExperience)[number];

const concepts = [
  { number: 1, href: "/work1", label: "Timeline" },
  { number: 2, href: "/work2", label: "Index" },
  { number: 3, href: "/work3", label: "Grid" },
  { number: 4, href: "/work4", label: "Minimal" },
] as const;

const conceptNotes: Record<WorkConcept, string> = {
  1: "A chronological path through the teams, classrooms, and research spaces that shaped my work.",
  2: "An editorial index that puts the story and outcomes of each role front and center.",
  3: "A modular collection for scanning roles, dates, and impact at a glance.",
};

function ExperienceBullets({ experience }: { experience: Experience }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-muted-foreground">
      {experience.longBullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  );
}

function ConceptSwitcher({ concept }: { concept: WorkConcept }) {
  return (
    <nav aria-label="Work page concepts" className="flex gap-1 rounded-lg border bg-background/70 p-1 shadow-sm backdrop-blur-sm">
      {concepts.map((item) => (
        <Button
          key={item.href}
          asChild
          variant={concept === item.number ? "default" : "ghost"}
          size="sm"
          className="flex-1"
        >
          <Link href={item.href} aria-current={concept === item.number ? "page" : undefined}>
            <span className="font-mono text-xs">0{item.number}</span>
            <span>{item.label}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
}

function TimelineConcept() {
  return (
    <ol className="flex flex-col" aria-label="Work experience timeline">
      {workExperience.map((experience) => (
        <li
          key={`${experience.company}-${experience.year}`}
          className="grid grid-cols-[1.5rem_minmax(0,1fr)] sm:grid-cols-[8.5rem_1.5rem_minmax(0,1fr)]"
        >
          <p className="hidden pt-6 text-right font-mono text-xs leading-5 text-muted-foreground sm:block">
            {experience.year}
          </p>
          <div className="relative flex justify-center" aria-hidden="true">
            <span className="absolute inset-y-0 w-px bg-border" />
            <span className="relative mt-7 size-2.5 rounded-full bg-foreground ring-4 ring-background" />
          </div>
          <Card className="mb-5 overflow-hidden bg-card/85 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">{experience.role}</CardTitle>
              <CardDescription className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span>{experience.company}</span>
                <span className="font-mono text-xs sm:hidden">{experience.year}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExperienceBullets experience={experience} />
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
  );
}

function IndexConcept() {
  return (
    <ol className="border-t" aria-label="Indexed work experience">
      {workExperience.map((experience, index) => (
        <li
          key={`${experience.company}-${experience.year}`}
          className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
        >
          <span className="font-mono text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <article className="flex flex-col gap-5">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {experience.role}
                </h2>
                <p className="text-sm font-medium text-foreground/80">
                  {experience.company}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs leading-5 text-muted-foreground">
                {experience.year}
              </p>
            </header>
            <ExperienceBullets experience={experience} />
          </article>
        </li>
      ))}
    </ol>
  );
}

function GridConcept() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2" aria-label="Work experience card grid">
      {workExperience.map((experience, index) => (
        <li
          key={`${experience.company}-${experience.year}`}
          className={cn(index % 3 === 0 && "sm:col-span-2")}
        >
          <Card className="h-full bg-card/85 backdrop-blur-sm">
            <CardHeader>
              <CardDescription className="flex items-center justify-between gap-4 font-mono text-xs">
                <span>{String(index + 1).padStart(2, "0")} / {String(workExperience.length).padStart(2, "0")}</span>
                <span className="text-right">{experience.year}</span>
              </CardDescription>
              <CardTitle className="pt-3 text-xl leading-snug">
                {experience.role}
              </CardTitle>
              <p className="text-sm font-medium text-foreground/80">
                {experience.company}
              </p>
            </CardHeader>
            <CardContent>
              <ExperienceBullets experience={experience} />
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export function WorkPage({ concept }: { concept: WorkConcept }) {
  return (
    <section className="flex flex-col gap-10 py-8 sm:py-12">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Experience archive · 2023—now
          </p>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Work, in progress.
            </h1>
            <p className="max-w-xl text-base leading-7 sm:text-lg">
              {conceptNotes[concept]}
            </p>
          </div>
        </div>
        <ConceptSwitcher concept={concept} />
      </header>

      {concept === 1 && <TimelineConcept />}
      {concept === 2 && <IndexConcept />}
      {concept === 3 && <GridConcept />}

      <aside className="flex flex-col gap-4 rounded-xl border bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">Have an interesting problem?</p>
          <p className="text-sm">I&apos;m always happy to talk about thoughtful software and research.</p>
        </div>
        <Button asChild variant="outline" className="sm:self-center">
          <Link href="/#contact">
            Get in touch
            <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </aside>
    </section>
  );
}
