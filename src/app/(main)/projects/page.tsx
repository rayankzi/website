import { UnderConstruction } from "@/components/under-construction";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-10 pb-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-muted-foreground">
          A running collection of projects, experiments, and shipped work.
        </p>
      </div>

      <UnderConstruction />
    </section>
  );
}
