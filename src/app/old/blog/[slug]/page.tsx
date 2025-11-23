import { BlogPostList } from "@/components/blog-post-list";
import { siteMetadata } from "@/lib/data";
import { redirect } from "next/navigation";
import { getMDXMetadata } from "../../../(main)/actions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { metadata } = await import(`@/content/blog/${slug}.mdx`);
    console.log(metadata);

    return { title: metadata.title };
  } catch (error) {
    console.error("Error occured", error);
    return { title: siteMetadata.title };
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
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <div>
        <Post />
        <div className="pt-10">
          <BlogPostList fetchedPosts={posts} isBlogFooter />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error occured", error);
    return redirect("/404");
  }
}
