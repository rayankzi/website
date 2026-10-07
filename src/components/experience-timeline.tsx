"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  bullets: string[];
  dateLabel: string;
  ongoing: boolean;
  /** Bar offset from the start of the range, as a percentage */
  left: number;
  /** Bar length, as a percentage of the range */
  width: number;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
  years: { year: number; left: number }[];
  /** Position of today's marker, as a percentage of the range */
  today: number;
}

export function ExperienceTimeline({
  items,
  years,
  today,
}: ExperienceTimelineProps) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const selected = items.find((item) => item.id === selectedId);

  return (
    <div className="flex flex-col gap-8">
      {/* Gantt-style overview of overlapping roles; each bar selects a role */}
      <div className="relative pt-6">
        {years.map(({ year, left }) => (
          <div
            key={year}
            aria-hidden="true"
            className="absolute inset-y-0 border-l border-dashed border-border"
            style={{ left: `${left}%` }}
          >
            {/* Early in the year the "Now" label would sit on top of this one */}
            {(today < left || today - left > 6) && (
              <span className="absolute top-0 left-1.5 font-mono text-[0.625rem] text-muted-foreground">
                {year}
              </span>
            )}
          </div>
        ))}

        <div
          aria-hidden="true"
          className="absolute inset-y-0 border-l border-foreground/40"
          style={{ left: `${today}%` }}
        >
          <span
            className={cn(
              "absolute top-0 font-mono text-[0.625rem] text-foreground",
              today > 90 ? "right-1.5" : "left-1.5",
            )}
          >
            Now
          </span>
        </div>

        <ul className="relative flex flex-col gap-2.5 pt-4">
          {items.map((item) => {
            const isSelected = item.id === selectedId;
            // Anchor the label to whichever end of the bar keeps it inside the chart
            const labelAtStart = item.left < 50;

            return (
              <li key={item.id} className="relative h-7">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`${item.role} at ${item.company}, ${item.dateLabel}`}
                  aria-controls="experience-details"
                  onClick={() => setSelectedId(item.id)}
                  className="group absolute inset-y-0 flex cursor-pointer flex-col justify-end focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ left: `${item.left}%`, width: `${item.width}%` }}
                >
                  <span
                    className={cn(
                      "absolute top-0 bg-background font-mono text-[0.6875rem] leading-none whitespace-nowrap transition-colors duration-200",
                      labelAtStart ? "left-0" : "right-0",
                      isSelected
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {item.company}
                  </span>
                  {/* Fixed-height track so the bar can thicken on hover without shifting the layout */}
                  <span className="flex h-2 w-full items-center">
                    <span
                      className={cn(
                        "h-1.5 w-full rounded-full transition-all duration-200 ease-out group-hover:h-2",
                        item.ongoing
                          ? cn(
                              "bg-gradient-to-r",
                              isSelected
                                ? "from-foreground from-60% to-foreground/20"
                                : "from-foreground/25 to-foreground/5 group-hover:from-foreground/60 group-hover:to-foreground/15",
                            )
                          : isSelected
                            ? "bg-foreground"
                            : "bg-foreground/25 group-hover:bg-foreground/60",
                      )}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id="experience-details"
        aria-live="polite"
        className="border-t border-border pt-5"
      >
        {selected && (
          <article key={selected.id} className="animate-swap flex flex-col gap-4">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col">
                <h3 className="text-[1.0625rem] leading-snug text-foreground">
                  {selected.role}
                </h3>
                <span className="text-[0.9375rem] leading-snug text-muted-foreground">
                  {selected.company}
                </span>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground sm:pt-1">
                {selected.dateLabel}
              </span>
            </header>

            <ul className="flex flex-col gap-2 text-[0.9375rem] leading-relaxed">
              {selected.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-low-contrast-text">
                  <span
                    aria-hidden="true"
                    className="pt-0.5 font-mono text-xs text-muted-foreground"
                  >
                    —
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </div>
  );
}
