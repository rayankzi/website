"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MDXItem } from "@/types";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface BlogClientProps {
  posts: MDXItem[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Featured posts are always the first 3 posts (unfiltered)
  const featuredPosts = posts.slice(0, 3);

  // All posts section shows all posts with search filtering
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["header", "featured", "all"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="header"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="space-y-8 w-full">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                <span
                  className="cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  PORTFOLIO
                </span>{" "}
                /{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => router.push("/blog")}
                >
                  BLOG
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                Recent
                <br />
                <span className="text-muted-foreground">Thoughts</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Programming tutorials, developer insights, and thoughts on
              building for the web.
            </p>
          </div>
        </header>

        {featuredPosts.length > 0 && (
          <section
            id="featured"
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            className="min-h-screen py-20 sm:py-32 opacity-0"
          >
            <div className="space-y-12 sm:space-y-16">
              <h2 className="text-3xl sm:text-4xl font-light">Recent Posts</h2>

              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {featuredPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.href}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{post.date}</span>
                        {post.readTime && <span>{post.readTime}</span>}
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          id="all"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl font-light">All Posts</h2>
              <div className="relative max-w-md w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search posts..."
                    className="pl-10 pr-10 border-border bg-background"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  )}
                </div>
                {/* {searchTerm && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    {filteredPosts.length === 0
                      ? "No posts found"
                      : `Found ${filteredPosts.length} post${
                          filteredPosts.length !== 1 ? "s" : ""
                        }`}
                  </div>
                )} */}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="space-y-8 sm:space-y-12">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.href}
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
            ) : (
              <div className="text-center py-12 space-y-4">
                <p className="text-xl text-muted-foreground">
                  No posts found matching &quot;{searchTerm}&quot;
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Rayan Kazi. All rights reserved.
              </div>
            </div>

            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← Back to home
            </Link>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
