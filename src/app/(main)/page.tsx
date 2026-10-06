import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { IntroSection } from "@/components/intro-section";

export const metadata = {
  title: "Home",
};

// Re-render daily so the timeline's "Now" marker and ongoing roles stay current
export const revalidate = 86400;

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14 pb-24 sm:gap-16">
      <IntroSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
