import Image from "next/image";

import { personalInfo, socialLinks } from "@/lib/data";

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-foreground underline decoration-foreground/25 decoration-1 underline-offset-[3px] transition-colors hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

export function IntroSection() {
  return (
    <section className="flex flex-col gap-8">
      <div
        className="animate-enter flex items-center gap-4"
        style={{ "--enter-delay": "0ms" } as React.CSSProperties}
      >
        <Image
          src="/images/profile.png"
          alt={`${personalInfo.name.first} ${personalInfo.name.last}`}
          width={96}
          height={96}
          priority
          className="size-12 rounded-full object-cover grayscale-[15%]"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl leading-tight font-medium tracking-tight text-foreground">
            {personalInfo.name.first} {personalInfo.name.last}
          </h1>
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            {personalInfo.availability.isAvailable && (
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
            )}
            {personalInfo.availability.status}
          </p>
        </div>
      </div>

      <div
        className="animate-enter flex flex-col gap-5 text-[1.0625rem] leading-relaxed"
        style={{ "--enter-delay": "80ms" } as React.CSSProperties}
      >
        <p>
          I&apos;m a second-year computer science student at{" "}
          <InlineLink href="https://www.asu.edu">
            Arizona State University
          </InlineLink>
          , where I study artificial intelligence through Barrett, the Honors
          College. My research sits at the intersection of AI and education.
        </p>
        <p>
          Outside of research, I build software people actually use — from
          nonprofit websites and internal tools to the backend behind
          ASU&apos;s campus maps. I care about clean interfaces, clear
          documentation, and shipping things that last.
        </p>
      </div>

      <ul
        className="animate-enter flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs"
        style={{ "--enter-delay": "160ms" } as React.CSSProperties}
      >
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
