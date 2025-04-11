import { notesMetadata, projectsData, siteMetadata } from "@/lib/data";
import { getPostMetadata } from "../actions/getPostMetadata";
import RSS from "rss";

export async function GET() {
  const currentDate = new Date().toISOString();
  const postMetadata = await getPostMetadata();

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

  notesMetadata.forEach((note) => {
    feed.item({
      title: note.title,
      guid: `${siteMetadata.url}${note.href}`,
      url: `${siteMetadata.url}${note.href}`,
      date: note.date,
      description: note.title,
    });
  });

  projectsData.forEach((project) => [
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
