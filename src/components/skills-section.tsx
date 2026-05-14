import {
  ConvexIcon,
  NextJSIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/icons";

const skills = [
  { name: "Next.js", Icon: NextJSIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Convex", Icon: ConvexIcon },
  { name: "Tailwind CSS", Icon: TailwindCSSIcon },
];

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-4 py-4">
      <p className="max-w-2xl text-base leading-7">
        <span className="text-black dark:text-muted-foreground">
          My favorite technologies ⤵
        </span>
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center gap-3 p-3 rounded-xl border bg-card  shadow-sm transition-colors hover:border-foreground/30"
          >
            <Icon />
            <span className="text-sm text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
