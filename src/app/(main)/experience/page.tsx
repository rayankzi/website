import { ExperienceList } from "@/components/experience-list";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Work Experience</h1>
        <p>
          What I&apos;ve done in the CS industry. My resume can be found here.
        </p>
      </div>

      <ExperienceList />
    </div>
  );
}
