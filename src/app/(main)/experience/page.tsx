"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { MessageCircle, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  personalInfo,
  workExperience,
  footer,
  dateRanges,
} from "@/lib/new-data";

export default function ExperiencePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header className="py-12 sm:py-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Work Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A detailed look at my professional journey and the impact
              I&apos;ve made at each role.
            </p>

            <Link
              href="#"
              className="group inline-flex items-center gap-2 px-4 py-2 mt-2 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </header>

        <section className="pb-20 sm:pb-32">
          <div className="space-y-12 sm:space-y-16">
            {workExperience.map((job, index) => (
              <article
                key={index}
                ref={(el) => {
                  sectionsRef.current[index] = el;
                }}
                className="opacity-0 group"
              >
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-10 border-b border-border/50 hover:border-border transition-colors duration-500">
                  <div className="lg:col-span-3">
                    <div className="sticky top-8 space-y-2">
                      <div className="text-lg sm:text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {job.year}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.company}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-9 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-medium">
                        {job.role}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-4">
                        {job.longBullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex gap-4 group/bullet"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-muted-foreground/40 rounded-full group-hover/bullet:bg-foreground transition-colors duration-300" />
                            <span className="text-muted-foreground leading-relaxed group-hover/bullet:text-foreground transition-colors duration-300">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                {footer.copyright}
              </div>
              <div className="text-xs text-muted-foreground">
                {footer.builtWith}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ModeToggle />

              <Link href={`mailto:${personalInfo.email}`}>
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
