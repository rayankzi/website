import Link from "next/link";
import { redirect } from "next/navigation";
import { getMDXMetadata } from "@/app/(main)/actions";
import { ArrowLeft } from "lucide-react";
import fs from "fs/promises";
import path from "path";

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
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

export default async function BlogPostPage({
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

    // Calculate read time
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      `${slug}.mdx`
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const readTime = calculateReadTime(fileContent);

    // Get related posts (exclude current post, take first 3)
    const relatedPosts = posts
      .filter((post) => !post.href.endsWith(slug))
      .slice(0, 3);

    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Back link */}
          <div className="pt-8 sm:pt-12">
            <Link
              href="/new/blog"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to all posts</span>
            </Link>
          </div>

          {/* Article header */}
          <header className="pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-border">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                <span>{metadata.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                {metadata.title}
              </h1>
            </div>
          </header>

          {/* Article content */}
          <article className="py-12 sm:py-16 prose prose-neutral dark:prose-invert max-w-none">
            <Post />
          </article>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="py-12 sm:py-16 border-t border-border">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-light">
                  You might also like
                </h2>

                <div className="grid gap-6 sm:gap-8">
                  {relatedPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.href.replace("/blog/", "/new/blog/")}
                      className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                    >
                      <div className="lg:col-span-3">
                        <div className="text-sm text-muted-foreground font-mono">
                          {post.date}
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-2">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-500">
                          {post.title}
                        </h3>
                      </div>

                      <div className="lg:col-span-2 flex items-start lg:justify-end mt-2 lg:mt-0">
                        {post.readTime && (
                          <span className="text-sm text-muted-foreground">
                            {post.readTime}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer className="py-12 sm:py-16 border-t border-border">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Rayan Kazi. All rights
                  reserved.
                </div>
              </div>

              <Link
                href="/new"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                &larr; Back to home
              </Link>
            </div>
          </footer>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    return redirect("/new/blog");
  }
}
