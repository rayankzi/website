import { BlogPostItem } from "@/components/blog-post-list";
import { postMetadata } from "@/lib/data";

export const metadata = {
  title: "Blog",
};

export default function BlogPostPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">The Blog.</h1>
        <p>
          This is where I write programming tutorials and things about being a
          developer.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium text-xl">Past Posts</span>

        <div className="flex flex-col">
          {postMetadata.map((post) => (
            <BlogPostItem
              key={post.title}
              title={post.title}
              date={post.date}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
