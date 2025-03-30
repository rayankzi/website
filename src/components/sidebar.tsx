"use client";

import { MenuItem } from "@/types";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/avatar";
import { Link as TransitionLink } from "next-view-transitions";
import Link from "next/link";

const menuItems: MenuItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/#connect",
    name: "Contact",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/projects",
    name: "Projects",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className={`sticky top-0 hidden h-screen w-48 py-20 md:block`}>
      <nav
        className="flex h-full w-full flex-col gap-12 overflow-visible"
        aria-label="Desktop navigation"
      >
        <div className="flex w-full flex-col items-start gap-4 text-left">
          <Avatar />

          <div>
            <span className="text-lg font-medium">Rayan Kazi</span>
            <p>Software Engineer</p>
          </div>
        </div>

        <ul className="flex list-none flex-col gap-4 space-y-0">
          {menuItems.map((link) => (
            <li key={link.href}>
              <SidebarLink
                href={link.href}
                active={
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href)
                }
              >
                <span>{link.name}</span>
              </SidebarLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

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
  if (href === "/#connect") {
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
  } else {
    return (
      <TransitionLink
        className={`flex items-center gap-2 py-1 hover:text-high-contrast-text transition-colors duration-200 ${
          active ? "text-high-contrast-text" : "text-low-contrast-text"
        }`}
        href={href}
        prefetch={prefetch}
      >
        {children}
      </TransitionLink>
    );
  }
}
