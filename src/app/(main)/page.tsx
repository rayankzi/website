import { getMDXMetadata } from "@/app/(main)/actions";
import HomeClient from "./home-client";

export default async function Home() {
  const blogPosts = await getMDXMetadata("blog");
  const projects = await getMDXMetadata("projects");

  return <HomeClient blogPosts={blogPosts} projects={projects} />;
}
