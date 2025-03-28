import { Avatar } from "@/components/ui/avatar";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-4">
        <div className="block md:hidden">
          <Avatar width={56} height={56} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Hello there 👋</span>

          <p className="text-low-contrast-text">
            I&apos;m a full stack engineer who&apos;s passionate about building
            amazing software.
          </p>

          <p className="text-low-contrast-text">
            I often write about my experiences on my{" "}
            <Link
              className="transition duration-200 hover:opacity-90 text-high-contrast-text"
              href="/blog"
            >
              blog
            </Link>
            .
          </p>
        </div>

        <div>hi</div>
      </div>
    </main>
  );
}
