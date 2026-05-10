import { UnderConstruction } from "@/components/new/under-construction";
import { cn } from "@/lib/utils";
import { Oxanium } from "next/font/google";

export const metadata = {
  title: "Projects",
};

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "700",
});

export default function NewProjectsPage() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex flex-col gap-2">
        <h1
          className={cn(
            oxanium.className,
            "text-3xl font-semibold text-foreground",
          )}
        >
          PROJECTS
        </h1>
        <p className="text-muted-foreground">
          A running collection of projects, experiments, and shipped work.
        </p>
      </div>

      <UnderConstruction />
    </section>
  );
}
