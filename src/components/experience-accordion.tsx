import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experienceData } from "@/lib/data";

export function ExperienceAccordion({ isOverview }: { isOverview?: boolean }) {
  const data = isOverview ? experienceData.slice(0, 2) : experienceData;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-low-contrast-text/70 px-4 rounded-md"
    >
      {data.map((entry, id) => (
        <AccordionItem value={`item-${id}`} key={`item-${id}`}>
          <AccordionTrigger className="cursor-pointer">
            <span className="decoration-high-contrast-text hover:underline">
              {entry.place}{" "}
            </span>
            <span className="mr-auto text-low-contrast-text font-normal">
              {`(${entry.time})`}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {isOverview ? (
              <span className="text-slate-100">{entry.shortDescription}</span>
            ) : (
              <ul className="ml-6 list-disc">
                {entry.longBullets.map((bullet, index) => (
                  <li className="pl-1 text-low-contrast-text mb-2" key={index}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
