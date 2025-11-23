import { siteMetadata } from "@/lib/data";
import { getMDXMetadata } from "../../(main)/actions";
import RSS from "rss";

export async function GET() {
  const currentDate = new Date().toISOString();
  const postMetadata = await getMDXMetadata("blog");
  const projectsMetadata = await getMDXMetadata("projects");

  const feed = new RSS({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site_url: siteMetadata.url,
    feed_url: `${siteMetadata.url}/rss.xml`,
    copyright: `${new Date().getFullYear()} ${siteMetadata.title}`,
    pubDate: currentDate,
  });

  postMetadata.forEach((post) => {
    feed.item({
      title: post.title,
      guid: `${siteMetadata.url}${post.href}`,
      url: `${siteMetadata.url}${post.href}`,
      date: post.date,
      description: post.title,
    });
  });

  projectsMetadata.forEach((project) => [
    feed.item({
      title: project.title,
      guid: `${siteMetadata.url}${project.href}`,
      url: `${siteMetadata.url}${project.href}`,
      date: currentDate,
      description: project.description,
    }),
  ]);

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
