/* eslint-disable @typescript-eslint/no-explicit-any */

import { MDXItem, ProjectItem } from "@/types";
import fs from "fs/promises";
import path from "path";

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

export async function getMDXMetadata<T extends "blog" | "projects">(
  type: T
): Promise<T extends "projects" ? ProjectItem[] : MDXItem[]> {
  const dir = path.join(process.cwd(), "src", "content", type);

  try {
    const files = await fs.readdir(dir);

    const filePromises = files.map(async (file) => {
      const { metadata } = await import(`@/content/${type}/${file}`);

      if (type === "projects") {
        // ProjectItem for projects
        return {
          title: metadata.title,
          date: metadata.date,
          href: `/${type}/${file}`.slice(0, -4),
          description: metadata.description,
          image: metadata.image,
        } as ProjectItem;
      } else {
        // MDXItem for blog - calculate read time
        const filePath = path.join(dir, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const readTime = calculateReadTime(fileContent);

        return {
          title: metadata.title,
          date: metadata.date,
          href: `/${type}/${file}`.slice(0, -4),
          readTime,
        } as MDXItem;
      }
    });

    const items = await Promise.all(filePromises);

    items.sort((a, b) => {
      const [aMonth, aDay, aYear] = a.date.split("/").map(Number);
      const [bMonth, bDay, bYear] = b.date.split("/").map(Number);

      const aFullYear = aYear < 100 ? 2000 + aYear : aYear;
      const bFullYear = bYear < 100 ? 2000 + bYear : bYear;

      const dateA = new Date(aFullYear, aMonth - 1, aDay);
      const dateB = new Date(bFullYear, bMonth - 1, bDay);

      return dateB.getTime() - dateA.getTime();
    });

    return items as any;
  } catch (error) {
    console.error(`Error reading ${type} files:`, error);
    return [] as any;
  }
}
