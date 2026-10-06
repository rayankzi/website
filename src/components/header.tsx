import Link from "next/link";

import { LocalTime } from "@/components/local-time";
import { ModeToggle } from "@/components/mode-toggle";
import { personalInfo } from "@/lib/data";

const navItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between gap-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <p className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
        <Link href="/" className="text-foreground">
          {personalInfo.location}
        </Link>
        <LocalTime />
      </p>

      <nav className="flex items-center gap-5" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hidden font-mono text-xs tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground xs:inline"
          >
            {item.label}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  );
}
