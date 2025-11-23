import { BlogPostList } from "@/components/blog-post-list";
import { getMDXMetadata } from "../../(main)/actions";

export const metadata = {
  title: "Blog",
};

export default async function BlogPostPage() {
  const posts = await getMDXMetadata("blog");

  return <BlogPostList fetchedPosts={posts} />;
}
