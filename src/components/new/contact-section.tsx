import { Link } from "next-view-transitions";

import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/new-data";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-5 py-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <p className="text-base text-muted-foreground">
          Feel free to contact me at{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {personalInfo.email}
          </a>
          .
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <Button key={social.name} asChild variant="outline">
            <Link href={social.url} target="_blank" rel="noreferrer">
              {social.name}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
