import { getMDXMetadata } from "@/app/(main)/actions";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import fs from "fs/promises";
import Link from "next/link";
import { redirect } from "next/navigation";
import path from "path";

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} mins`;
}

function getNewBlogHref(href: string) {
  return href.replace(/^\/blog/, "/new/blog");
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

  try {
    const { metadata } = await import(`@/content/blog/${slug}.mdx`);
    return { title: metadata.title };
  } catch {
    return { title: "Blog Post" };
  }
}

export default async function NewBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getMDXMetadata("blog");

  try {
    const { default: Post, metadata } = await import(
      `@/content/blog/${slug}.mdx`
    );

    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      `${slug}.mdx`
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const readTime = calculateReadTime(fileContent);

    const relatedPosts = posts
      .filter((post) => !post.href.endsWith(`/${slug}`))
      .slice(0, 3);

    return (
      <article className="flex flex-col gap-10 py-10">
        <Link
          href="/new/blog"
          className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to all posts</span>
        </Link>

        <header className="flex flex-col gap-5 border-b border-border pb-8">
          <div className="text-sm text-muted-foreground">
            {formatDate(metadata.date)} · {readTime}
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {metadata.title}
          </h1>
        </header>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <Post />
        </div>

        {relatedPosts.length > 0 && (
          <section className="flex flex-col gap-5 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              You might also like
            </h2>
            <div className="flex flex-col">
              {relatedPosts.map((post) => (
                <Link
                  key={post.href}
                  href={getNewBlogHref(post.href)}
                  className="group -mx-3 flex rounded-md border border-transparent px-3 py-4 transition-all duration-300 hover:border-border hover:bg-accent/40 hover:px-5"
                >
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-medium text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                      {post.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return redirect("/new/blog");
  }
}
