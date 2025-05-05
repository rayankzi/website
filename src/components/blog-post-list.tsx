"use client";

import { formatDate } from "@/lib/utils";
import { MDXItem } from "@/types";
import { Link } from "next-view-transitions";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";

export function BlogPostList({
  fetchedPosts,
  isOverview,
}: {
  fetchedPosts: MDXItem[];
  isOverview?: boolean;
}) {
  const [posts] = useState<MDXItem[]>(fetchedPosts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex flex-col ${isOverview ? "gap-4" : "gap-8"}`}>
      {isOverview ? (
        <>
          <div className="pb-1">
            <span className="text-lg font-medium">Recent Posts</span>
            <p>What I&apos;ve been up to lately</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="transition duration-200 flex flex-col">
              {posts.map((post) => (
                <BlogPostItem
                  key={post.title}
                  title={post.title}
                  date={post.date}
                  href={post.href}
                />
              ))}
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
            >
              View all
              <span className="transition-transform group-hover:translate-x-1 ml-1">
                {`→`}
              </span>{" "}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium">The Blog.</h1>
            <p>
              This is where I write programming tutorials and things about being
              a developer.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-xl">Past Posts</h2>

            <div className="relative max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search posts..."
                  className="pl-10 pr-10"
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
                    <X className="h-4 w-4 text-gray-500" />
                  </Button>
                )}
              </div>
              {searchTerm && (
                <div className="mt-2 text-sm text-gray-500">
                  {filteredPosts.length === 0
                    ? "No posts found"
                    : `Found ${filteredPosts.length} post${
                        filteredPosts.length !== 1 ? "s" : ""
                      }`}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              {filteredPosts.map((post) => (
                <BlogPostItem
                  key={post.title}
                  title={post.title}
                  date={post.date}
                  href={post.href}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function BlogPostItem({ title, href, date }: MDXItem) {
  return (
    <Link
      href={href}
      className="flex py-6 gap-4 items-center no-underline hover:bg-[#191919] transition-all duration-200 rounded-md hover:border-[#222222] hover:px-3 hover:-mx-3"
    >
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span>{title}</span>
        <span className="font-regular text-sm text-low-contrast-text">
          {formatDate(date)}
        </span>
      </div>
    </Link>
  );
}
