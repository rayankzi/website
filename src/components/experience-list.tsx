import { experienceData } from "@/lib/data";
import { Link } from "next-view-transitions";

export function ExperienceList({ isOverview }: { isOverview?: boolean }) {
  if (isOverview) {
    return (
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="text-lg font-medium">Work Experience</span>
          <p>What I&apos;m doing right now</p>
        </div>

        <div className="flex flex-col gap-6">
          {experienceData
            .slice(0, 2)
            .map(({ shortDescription, place, time, position }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <div>
                  <p className="text-sm">{time}</p>
                  <span className="font-medium">{place}</span>
                  <p className="text-sm">{position}</p>
                </div>

                <p>{shortDescription}</p>
              </div>
            ))}
        </div>

        <Link
          href="/experience"
          className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
        >
          View all
          <span className="transition-transform group-hover:translate-x-1 ml-1">
            {`→`}
          </span>
        </Link>
      </div>
    );
  } else
    return (
      <div className="flex flex-col gap-6">
        {experienceData.map(({ longBullets, place, time, position }, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div>
              <p className="text-sm">{time}</p>
              <span className="font-medium">{place}</span>
              <p className="text-sm">{position}</p>
            </div>

            <ul className="ml-6 list-disc">
              {longBullets.map((bullet, index) => (
                <li className="pl-1 text-low-contrast-text mb-2" key={index}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
}
