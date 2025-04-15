import { redirect } from "next/navigation";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Project } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <div>
        <Project />
      </div>
    );
  } catch (error) {
    console.error("Error occured", error);
    return redirect("/404");
  }
}
