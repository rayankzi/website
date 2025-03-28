"use client";

import Link from "next/link";

export function SidebarLink({
  href,
  active = false,
  prefetch = true,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  prefetch?: boolean;
}) {
  return (
    <Link
      className={`flex items-center gap-2 py-1 hover:text-high-contrast-text transition-colors duration-200 ${
        active ? "text-high-contrast-text" : "text-low-contrast-text"
      }`}
      href={href}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
