import { Link } from "next-view-transitions";
import { Oxanium } from "next/font/google";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/new-data";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "700",
});

const navItems = [
  { href: "/new/blog", label: "blog" },
  { href: "/new/projects", label: "projects" },
  { href: "/new#contact", label: "contact" },
];

export function NewHeader() {
  const name = `${personalInfo.name.first.toUpperCase()} ${personalInfo.name.last.toUpperCase()}`;
  const initials = `${personalInfo.name.first[0]}${personalInfo.name.last[0]}`;

  return (
    <header className="flex items-center justify-between gap-5 py-8">
      <Link
        href="/new"
        className={cn(
          oxanium.className,
          "shrink-0 font-bold tracking-normal text-xl text-foreground",
        )}
      >
        <span className="sm:hidden">{initials}</span>
        <span className="hidden sm:inline">{name}</span>
      </Link>

      <nav
        className="flex min-w-0 items-center justify-end gap-4"
        aria-label="Primary"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md py-1 font-medium text-muted-foreground transition-colors hover:text-foreground tracking-tight"
          >
            {item.label}
          </Link>
        ))}

        <ModeToggle />
      </nav>
    </header>
  );
}
