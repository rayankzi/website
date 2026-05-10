import { getMDXMetadata } from "@/lib/mdx";

async function getBlogRoutes() {
  const baseUrl = "https://rayankazi.dev";
  const currentDate = new Date().toISOString();
  const posts = await getMDXMetadata("blog");

  return posts.map((post) => ({
    url: `${baseUrl}${post.href}`,
    lastModified: currentDate,
  }));
}

export default async function sitemap() {
  const baseUrl = "https://rayankazi.dev";
  const currentDate = new Date().toISOString();

  const postRoutes = await getBlogRoutes();

  const otherRoutes = ["/", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
  }));

  return [...otherRoutes, ...postRoutes];
}
