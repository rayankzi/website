import { BlogPostList } from "@/components/blog-post-list";
import { ContactMe } from "@/components/contact-me";
import { Introduction } from "@/components/intro";
import { ProjectsList } from "@/components/projects-list";

// TODO: do sitemap and robots after deployment

export default async function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Introduction />
      <BlogPostList isOverview />
      <ProjectsList />
      <ContactMe />
    </main>
  );
}
