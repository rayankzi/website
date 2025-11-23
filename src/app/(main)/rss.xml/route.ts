import { getMDXMetadata } from "@/app/(main)/actions";

export async function GET() {
  const posts = await getMDXMetadata("blog");
  const siteUrl = "https://rayankazi.dev";

  const rssItems = posts
    .map((post) => {
      // Parse the date from MM/DD/YYYY format
      const [month, day, year] = post.date.split("/").map(Number);
      const fullYear = year < 100 ? 2000 + year : year;
      const pubDate = new Date(fullYear, month - 1, day).toUTCString();

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}${post.href}</link>
      <guid isPermaLink="true">${siteUrl}${post.href}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rayan Kazi's Blog</title>
    <link>${siteUrl}</link>
    <description>Programming tutorials, developer insights, and thoughts on building for the web.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
