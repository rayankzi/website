import { formatDate } from "@/lib/utils";
import { MDXItem } from "@/types";
import { Link } from "next-view-transitions";

export function BlogPostList({
  posts,
  isOverview,
}: {
  posts: MDXItem[];
  isOverview?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
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

        {isOverview && (
          <Link
            href="/blog"
            className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1 ml-1">
              {`→`}
            </span>{" "}
          </Link>
        )}
      </div>
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
