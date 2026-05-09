import { Link } from "next-view-transitions";

import { ModeToggle } from "@/components/mode-toggle";
import { personalInfo } from "@/lib/new-data";

const navItems = [
  { href: "/new/blog", label: "blog" },
  { href: "/new/projects", label: "projects" },
  { href: "/new#contact", label: "contact" },
];

export function NewHeader() {
  const name = `${personalInfo.name.first} ${personalInfo.name.last}`;

  return (
    <header className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
      <Link href="/new" className="font-bold tracking-normal text-foreground">
        {name}
      </Link>

      <nav
        className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-4"
        aria-label="Primary"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md py-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}

        <ModeToggle />
      </nav>
    </header>
  );
}
