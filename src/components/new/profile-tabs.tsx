import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, projects, workExperience } from "@/lib/new-data";

const educationBullets = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

export function ProfileTabs() {
  return (
    <section className="py-8">
      <Tabs defaultValue="education" className="gap-6">
        <TabsList className="grid h-auto w-full grid-cols-3">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">
            <span className="hidden xs:inline">Professional Experience</span>
            <span className="xs:hidden">Experience</span>
          </TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="education" className="flex flex-col gap-4">
          {education.map((item) => (
            <Card key={`${item.degree}-${item.year}`} className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">{item.degree}</CardTitle>
                <CardDescription>
                  {item.year} · {item.university}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <p>{item.description}</p>
                  <p>{item.additionalInfo}</p>
                </div>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
                  {educationBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="experience">
          <Card className="rounded-lg">
            <CardContent className="-my-4">
              <Accordion type="single" collapsible className="w-full">
                {workExperience.map((item) => (
                  <AccordionItem
                    key={`${item.company}-${item.year}`}
                    value={`${item.company}-${item.year}`}
                  >
                    <AccordionTrigger>
                      <div className="flex w-full flex-col gap-1 pr-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-base font-medium text-foreground">
                            {item.role}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item.company}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
                        {item.longBullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Card className="overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(min-width: 768px) 352px, 100vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
