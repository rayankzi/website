"use server";

import { Post } from "@/types";
import fs from "fs";
import path from "path";

function extractTitleAndDate(fileContent: string) {
  const firstTwelveLines = fileContent.split("\n").slice(0, 12).join("\n");

  let title: string | null = null;
  let date: string | null = null;

  const h1TitleMatch = firstTwelveLines.match(/# ([^\n]+)/);
  const metadataTitleMatch = firstTwelveLines.match(/title:\s*"([^"]+)"/);
  const dateMatch = firstTwelveLines.match(/date="([^"]+)"/);

  if (h1TitleMatch && h1TitleMatch[1]) title = h1TitleMatch[1];
  if (metadataTitleMatch && metadataTitleMatch[1])
    title = metadataTitleMatch[1];
  if (dateMatch && dateMatch[1]) date = dateMatch[1];

  return { title: title as string, date: date as string };
}

export async function getPostMetadata(): Promise<Post[]> {
  try {
    const postsDirectory = path.join(
      process.cwd(),
      "src",
      "app",
      "(main)",
      "blog",
      "(posts)"
    );

    const postDirs = await fs.promises.readdir(postsDirectory);

    const postsData = await Promise.all(
      postDirs.map(async (dirName) => {
        const dirPath = path.join(postsDirectory, dirName);

        try {
          const stats = await fs.promises.stat(dirPath);

          if (!stats.isDirectory()) return null;

          const mdxPath = path.join(dirPath, "page.mdx");
          const fileContent = await fs.promises.readFile(mdxPath, "utf8");

          const { title, date } = extractTitleAndDate(fileContent);

          return {
            href: `/blog/${dirName}`,
            title: title,
            date: date,
          };
        } catch (err) {
          console.log(`Error processing ${dirName}:`, err);
          return null;
        }
      })
    );

    return postsData
      .filter((post): post is Post => post !== null)
      .sort((a, b) => {
        const [aMonth, aDay, aYear] = a.date.split("/").map(Number);
        const [bMonth, bDay, bYear] = b.date.split("/").map(Number);

        const aFullYear = aYear < 100 ? 2000 + aYear : aYear;
        const bFullYear = bYear < 100 ? 2000 + bYear : bYear;

        const dateA = new Date(aFullYear, aMonth - 1, aDay);
        const dateB = new Date(bFullYear, bMonth - 1, bDay);

        return dateB.getTime() - dateA.getTime();
      });
  } catch (err) {
    console.error("Error processing posts directory:", err);
    return [];
  }
}
