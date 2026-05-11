import { personalInfo } from "@/lib/data";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-5 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="text-base dark:text-muted-foreground">
          <span className="text-black dark:text-muted-foreground">
            Feel free to email me at{" "}
            <Link
              href={`mailto:${personalInfo.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {personalInfo.email}
            </Link>{" "}
            or connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/rayan-kazi-dev/"
              target="_blank"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              LinkedIn
            </Link>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
