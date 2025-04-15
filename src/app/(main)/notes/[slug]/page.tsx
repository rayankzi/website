import { redirect } from "next/navigation";

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
