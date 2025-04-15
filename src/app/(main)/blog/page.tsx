import { BlogPostItem } from "@/components/blog-post-list";
import { getMDXMetadata } from "../actions";

export const metadata = {
  title: "Blog",
};

export default async function BlogPostPage() {
  const posts = await getMDXMetadata("blog");
  console.log(posts);

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
          {posts.map((post) => (
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
