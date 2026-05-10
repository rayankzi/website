import { personalInfo } from "@/lib/new-data";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-5 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="text-base dark:text-muted-foreground">
          <span className="text-black dark:text-muted-foreground">
            Feel free to contact me at{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {personalInfo.email}
            </a>
            . or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/rayan-kazi-dev/"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Linkedin
            </a>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
