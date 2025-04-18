import { ProjectCard } from "@/components/projects-list";
import { getMDXMetadata } from "../actions";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projectsData = await getMDXMetadata("projects");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Personal Projects</h1>
        <p>This is some of the stuff I build (or have helped build) for fun.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="transition duration-200 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map(({ title, description, href, image }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              href={href}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
