import {
  ExperienceTimeline,
  type TimelineItem,
} from "@/components/experience-timeline";
import { workExperience } from "@/lib/data";
import { formatYearMonth, parseYearMonth } from "@/lib/utils";

function toMonths(date: Date) {
  return date.getUTCFullYear() * 12 + date.getUTCMonth();
}

export function ExperienceSection() {
  const now = new Date();
  // Fractional month position of today, used for the marker and ongoing roles
  const today = toMonths(now) + (now.getUTCDate() - 1) / 31;

  const firstYear = Math.min(
    ...workExperience.map((item) =>
      parseYearMonth(item.start).getUTCFullYear(),
    ),
  );
  const lastYear = now.getUTCFullYear() + 1;
  const rangeStart = firstYear * 12;
  const rangeLength = lastYear * 12 - rangeStart;
  const toPercent = (months: number) =>
    ((months - rangeStart) / rangeLength) * 100;

  const items: TimelineItem[] = workExperience.map((item, index) => {
    const start = toMonths(parseYearMonth(item.start));
    // End months are inclusive, so a role ending in May fills through May
    const end = item.end ? toMonths(parseYearMonth(item.end)) + 1 : today;

    return {
      id: `experience-${index}`,
      role: item.role,
      company: item.company,
      bullets: item.longBullets,
      dateLabel: `${formatYearMonth(item.start)} — ${item.end ? formatYearMonth(item.end) : "Now"}`,
      ongoing: !item.end,
      left: toPercent(start),
      width: toPercent(end) - toPercent(start),
    };
  });

  const years = Array.from(
    { length: lastYear - firstYear },
    (_, index) => firstYear + index,
  ).map((year) => ({ year, left: toPercent(year * 12) }));

  return (
    <section
      id="experience"
      className="animate-enter flex scroll-mt-12 flex-col gap-6"
      style={{ "--enter-delay": "240ms" } as React.CSSProperties}
    >
      <h2 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        Experience
      </h2>

      <ExperienceTimeline
        items={items}
        years={years}
        today={toPercent(today)}
      />
    </section>
  );
}
