import { getMDXMetadata } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ViewTransition } from "react";

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

export default async function BlogPage() {
  const posts = await getMDXMetadata("blog");

  return (
    <section className="flex flex-col gap-10 pb-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          Blog
        </h1>
        <p className="text-muted-foreground">
          Writing on software, learning, and the things I am building.
        </p>
      </div>

      <div className="flex flex-col border-t border-border">
        {posts.map((post) => {
          const readTime = formatReadTime(post.readTime);
          const slug = post.href.split("/").pop();

          return (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <ViewTransition name={`blog-title-${slug}`} share="morph">
                <h2 className="text-[1.0625rem] leading-snug text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                  {post.title}
                </h2>
              </ViewTransition>
              <ViewTransition name={`blog-meta-${slug}`} share="morph">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {formatDate(post.date)}
                  {readTime ? ` · ${readTime}` : null}
                </span>
              </ViewTransition>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
