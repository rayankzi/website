import { siteMetadata } from "@/lib/data";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { metadata } = await import(`@/content/projects/${slug}.mdx`);
    console.log(metadata);

    return { title: metadata.title };
  } catch (error) {
    console.error("Error occured", error);
    return { title: siteMetadata.title };
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Project } = await import(`@/content/projects/${slug}.mdx`);

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
