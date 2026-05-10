import { getMDXMetadata } from "@/app/(main)/actions";
import { cn, formatDate } from "@/lib/utils";
import { Oxanium } from "next/font/google";
import Link from "next/link";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "Blog",
};

function formatReadTime(readTime?: string) {
  if (!readTime) {
    return null;
  }

  const minutes = readTime.match(/\d+/)?.[0];
  return minutes ? `${minutes} mins` : readTime;
}

function getNewBlogHref(href: string) {
  return href.replace(/^\/blog/, "/new/blog");
}

export default async function NewBlogPage() {
  const posts = await getMDXMetadata("blog");

  return (
    <section className="flex flex-col gap-8 py-10">
      <div className="flex flex-col gap-2">
        <h1
          className={cn(
            oxanium.className,
            "text-3xl font-semibold text-foreground"
          )}
        >
          BLOG
        </h1>
        <p className="text-muted-foreground">
          Writing on software, learning, and the things I am building.
        </p>
      </div>

      <div className="flex flex-col">
        {posts.map((post) => {
          const readTime = formatReadTime(post.readTime);

          return (
            <Link
              key={post.href}
              href={getNewBlogHref(post.href)}
              className="group -mx-3 flex rounded-md border border-transparent px-3 py-5 transition-colors duration-300 hover:border-border hover:bg-accent/40"
            >
              <div className="flex w-full flex-col gap-1.5">
                <span className="text-xs text-muted-foreground">
                  {formatDate(post.date)}
                  {readTime ? ` · ${readTime}` : null}
                </span>
                <h2 className="text-base font-medium leading-6 text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                  {post.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
