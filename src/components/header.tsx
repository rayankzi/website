import Link from "next/link";

import { LocalTime } from "@/components/local-time";
import { ModeToggle } from "@/components/mode-toggle";
import { SectionNav } from "@/components/section-nav";
import { personalInfo } from "@/lib/data";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <p className="flex shrink-0 items-center gap-2 font-mono text-xs tracking-wide whitespace-nowrap text-muted-foreground uppercase">
        <Link href="/" className="hidden text-foreground xs:inline">
          {personalInfo.location}
        </Link>
        <LocalTime />
      </p>

      <div className="flex items-center gap-5">
        <SectionNav />
        <ModeToggle />
      </div>
    </header>
  );
}
