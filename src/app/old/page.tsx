import { BlogPostList } from "@/components/blog-post-list";
import { ContactMe } from "@/components/contact-me";
import { ExperienceList } from "@/components/experience-list";
import { Introduction } from "@/components/intro";
import { ProjectsList } from "@/components/projects-list";
import { getMDXMetadata } from "../(main)/actions";

export default async function Home() {
  const posts = await getMDXMetadata("blog");
  const projects = await getMDXMetadata("projects");

  return (
    <main className="flex flex-col gap-16">
      <Introduction />
      <BlogPostList fetchedPosts={posts.slice(0, 3)} isOverview />
      <ProjectsList data={projects.slice(0, 2)} isOverview />
      <ExperienceList isOverview />
      <ContactMe />
    </main>
  );
}
