import { personalInfo, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-border pt-6 pb-10 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {personalInfo.portfolioYear} {personalInfo.name.first}{" "}
        {personalInfo.name.last}
      </span>
      <ul className="flex gap-5">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
