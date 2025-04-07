import { BlogPostItem as NoteItem } from "@/components/blog-post-list";
import { notesMetadata } from "@/lib/data";

export const metadata = {
  title: "Notes",
};

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Notes</h1>
        <p>
          This is my collection of just general notes, code snippets, or
          anything else.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium text-xl">Previous Notes</span>

        <div className="flex flex-col">
          {notesMetadata.map((note) => (
            <NoteItem
              key={note.title}
              title={note.title}
              date={note.date}
              href={note.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
