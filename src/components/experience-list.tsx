import { Link } from "next-view-transitions";
import { ExperienceAccordion } from "@/components/experience-accordion";

export function ExperienceList({ isOverview }: { isOverview?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {isOverview && (
        <div className="pb-1">
          <span className="text-lg font-medium">Work Experience</span>
          <p>What I&apos;m doing right now</p>
        </div>
      )}

      {isOverview ? (
        <ExperienceAccordion isOverview />
      ) : (
        <ExperienceAccordion />
      )}

      {isOverview && (
        <Link
          href="/experience"
          className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
        >
          View all
          <span className="transition-transform group-hover:translate-x-1 ml-1">
            {`→`}
          </span>
        </Link>
      )}
    </div>
  );
}
