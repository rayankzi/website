import { Link } from "next-view-transitions";

export function ExperienceList({ isOverview }: { isOverview: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="pb-1">
        <span className="text-lg font-medium">Work Experience</span>
        <p>What I&apos;m doing right now</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm">Aug 2024 - Current</p>
            <span className="font-medium">Grand Canyon University</span>
            <p className="text-sm">Independent Researcher</p>
          </div>

          <span className="text-slate-100">
            Researching how AI generates phishing emails and determining which
            LLM (OpenAI, Claude, Gemini) generates the most convincing emails.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm">Jun 2024 - Current</p>
            <span className="font-medium">We Care Act NYC</span>
            <p className="text-sm">IT Member</p>
          </div>

          <span className="text-slate-100">
            Developed new CRM for college consulting subsidiary and maintaining
            current We Care Act website.
          </span>
        </div>
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
}
