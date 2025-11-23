import { getMDXMetadata } from "@/app/(main)/actions";
import BlogClient from "./blog-client";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getMDXMetadata("blog");

  return <BlogClient posts={posts} />;
}
