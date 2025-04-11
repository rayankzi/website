import { BlogPostList } from "@/components/blog-post-list";
import { ContactMe } from "@/components/contact-me";
import { ExperienceList } from "@/components/experience-list";
import { Introduction } from "@/components/intro";
import { ProjectsList } from "@/components/projects-list";
import { getPostMetadata } from "./actions/getPostMetadata";

export default async function Home() {
  const posts = await getPostMetadata();

  return (
    <main className="flex flex-col gap-16">
      <Introduction />
      <BlogPostList posts={posts.slice(0, 3)} isOverview />
      <ProjectsList isOverview />
      <ExperienceList isOverview />
      <ContactMe />
    </main>
  );
}
