import { NewFooter } from "@/components/new/new-footer";
import { NewHeader } from "@/components/new/new-header";
import { ProjectCard } from "@/components/new/profile-tabs";
import { projects } from "@/lib/new-data";

export const metadata = {
  title: "Projects",
};

export default function NewProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 sm:px-6">
      <NewHeader />

      <section className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            A running collection of projects, experiments, and shipped work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <NewFooter />
    </main>
  );
}
