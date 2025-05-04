import { Avatar } from "@/components/ui/avatar";
import { Link } from "next-view-transitions";
import NextLink from "next/link";

export function Introduction() {
  return (
    <div className="flex flex-col gap-4">
      <div className="block md:hidden">
        <Avatar width={56} height={56} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium text-lg">Hi there, I&apos;m Rayan 👋</span>

        <p className="text-low-contrast-text">
          I&apos;m a full stack developer from Phoenix and studying computer
          science @{" "}
          <NextLink
            href="https://barretthonors.asu.edu/"
            target="_blank"
            className="transition duration-200 hover:opacity-90 text-high-contrast-text"
          >
            ASU
          </NextLink>{" "}
        </p>

        <p className="text-low-contrast-text">
          I often write about my experiences and thoughts on my{" "}
          <Link
            className="transition duration-200 hover:opacity-90 text-high-contrast-text"
            href="/blog"
          >
            blog
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
