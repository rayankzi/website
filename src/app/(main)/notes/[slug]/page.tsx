import { siteMetadata } from "@/lib/data";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { metadata } = await import(`@/content/notes/${slug}.mdx`);
    console.log(metadata);

    return { title: metadata.title };
  } catch (error) {
    console.error("Error occured", error);
    return { title: siteMetadata.title };
  }
}

export default async function NoteItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Note } = await import(`@/content/notes/${slug}.mdx`);

    return (
      <div>
        <Note />
      </div>
    );
  } catch (error) {
    console.error("Error occured", error);
    return redirect("/404");
  }
}
