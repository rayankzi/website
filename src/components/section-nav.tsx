"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

// Each label starts with its short form, so clipping the full label to a width
// in `ch` (exact in a monospace font) reveals "w" → "work" → "work experience"
const sections = [
  { id: "experience", label: "work experience", short: 4 },
  { id: "education", label: "education", short: 3 },
  { id: "projects", label: "projects", short: 4 },
];

// Wide enough for the longest label plus two collapsed letters and minimum gaps
const navWidth = `${Math.max(...sections.map(({ label }) => label.length)) + sections.length - 1 + 2.5}ch`;

export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <nav
      aria-label="Sections"
      onMouseLeave={() => setActiveId(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveId(null);
        }
      }}
      // Fixed width with the ends pinned: the first label grows rightward from
      // the left edge, the last grows leftward from the right, the middle both ways
      className="flex justify-between gap-[1.25ch] font-mono text-xs"
      style={{ width: navWidth }}
    >
      {sections.map(({ id, label, short }) => {
        const isActive = activeId === id;
        const width = isActive
          ? label.length
          : activeId === null
            ? short
            : 1;

        return (
          <a
            key={id}
            href={`/#${id}`}
            onMouseEnter={() => setActiveId(id)}
            onFocus={() => setActiveId(id)}
            className={cn(
              "block overflow-hidden whitespace-nowrap transition-[width,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
              isActive ? "text-foreground" : "text-muted-foreground",
            )}
            style={{ width: `${width}ch` }}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
