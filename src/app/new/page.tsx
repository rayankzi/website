import { getMDXMetadata } from "@/app/(main)/actions";
import HomeClient from "./home-client";

export default async function Home() {
  const blogPosts = await getMDXMetadata("blog");

  return <HomeClient blogPosts={blogPosts} />;
}
