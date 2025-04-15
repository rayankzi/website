import { Link } from "next-view-transitions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProjectItem } from "@/types";

export function ProjectsList({
  isOverview,
  data,
}: {
  isOverview: boolean;
  data: ProjectItem[];
}) {
  if (isOverview) {
    return (
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="text-lg font-medium">Personal Projects</span>
          <p>My best work</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="transition duration-200 flex flex-col gap-8 md:flex-row">
            {data.slice(0, 2).map(({ title, description, href, image }) => (
              <ProjectCard
                key={title}
                title={title}
                description={description}
                href={href}
                image={image}
              />
            ))}
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1 ml-1">
              {`→`}
            </span>{" "}
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>hi</div>;
  }
}

export function ProjectCard({
  title,
  description,
  href,
  image,
}: Omit<ProjectItem, "date">) {
  return (
    <Link href={href} className="w-full">
      <Card className="w-full hover:bg-accent">
        <CardContent>
          <div className="relative w-full aspect-video mx-auto rounded-lg overflow-hidden">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
