"use client";

import Link from "next/link";
import { Oxanium } from "next/font/google";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "700",
});

const navItems = [
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
  { href: "/#contact", label: "contact" },
];

export function Header() {
  const pathname = usePathname();
  const name = `${personalInfo.name.first.toUpperCase()} ${personalInfo.name.last.toUpperCase()}`;
  const initials = `${personalInfo.name.first[0]}${personalInfo.name.last[0]}`;

  const isActive = (href: string) => {
    if (href === "/blog") {
      return pathname === href || pathname.startsWith(`${href}/`);
    }

    if (href === "/projects") {
      return pathname === href || pathname.startsWith(`${href}/`);
    }

    return false;
  };

  return (
    <header className="flex items-center justify-between gap-5 py-8">
      <Link
        href="/"
        className={cn(
          oxanium.className,
          "shrink-0 font-bold tracking-normal text-xl text-foreground pt-1",
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
            className={cn(
              "rounded-md py-1 font-medium tracking-tight transition-colors hover:text-foreground",
              isActive(item.href) ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}

        <ModeToggle />
      </nav>
    </header>
  );
}
