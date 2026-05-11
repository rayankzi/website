import { UnderConstruction } from "@/components/under-construction";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs";
import { education, workExperience } from "@/lib/data";

export function ProfileTabs() {
  return (
    <section className="py-4">
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
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
                  {item.description.map((bullet) => (
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

        <TabsContent value="projects">
          <UnderConstruction />
        </TabsContent>
      </Tabs>
    </section>
  );
}
