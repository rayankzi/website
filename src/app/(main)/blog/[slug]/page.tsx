import { redirect } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <div>
        <Post />
      </div>
    );
  } catch (error) {
    console.error("Error occured", error);
    return redirect("/404");
  }
}
