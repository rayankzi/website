import { getMDXMetadata } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import fs from "fs/promises";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import { ViewTransition } from "react";

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} mins`;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src", "content", "blog");

  try {
    const files = await fs.readdir(dir);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(".mdx", ""),
      }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    `${slug}.mdx`,
  );

  const exists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    return { title: "Blog Post" };
  }

  const { metadata } = await import(`@/content/blog/${slug}.mdx`);
  return { title: metadata.title };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getMDXMetadata("blog");

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    `${slug}.mdx`,
  );

  const fileContent = await fs.readFile(filePath, "utf-8").catch(() => null);

  if (fileContent === null) {
    notFound();
  }

  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  const readTime = calculateReadTime(fileContent);

  const relatedPosts = posts
    .filter((post) => !post.href.endsWith(`/${slug}`))
    .slice(0, 3);

  return (
    <article className="flex flex-col gap-10 py-10">
      <Link
        href="/blog"
        className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Back to all posts</span>
      </Link>

      <header className="flex flex-col gap-5 border-b border-border pb-8">
        <ViewTransition name={`blog-meta-${slug}`} share="morph">
          <div className="text-sm text-muted-foreground">
            {formatDate(metadata.date)} · {readTime}
          </div>
        </ViewTransition>
        <ViewTransition name={`blog-title-${slug}`} share="morph">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {metadata.title}
          </h1>
        </ViewTransition>
      </header>

      <ViewTransition enter="slide-up" default="none">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <Post />
        </div>
      </ViewTransition>

      {relatedPosts.length > 0 && (
        <ViewTransition enter="slide-up" default="none">
        <section className="flex flex-col gap-5 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            You might also like
          </h2>
          <div className="flex flex-col">
            {relatedPosts.map((post) => {
              const relatedSlug = post.href.split("/").pop();
              return (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group -mx-3 flex rounded-md border border-transparent px-3 py-4 transition-all duration-300 hover:border-border hover:bg-accent/40 hover:px-5"
                >
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <ViewTransition name={`blog-title-${relatedSlug}`} share="morph">
                      <h3 className="font-medium text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                        {post.title}
                      </h3>
                    </ViewTransition>
                    <ViewTransition name={`blog-meta-${relatedSlug}`} share="morph">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                    </ViewTransition>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        </ViewTransition>
      )}
    </article>
  );
}
