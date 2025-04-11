import { promises as fs } from "fs";
import path from "path";

async function getFileSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const baseUrl = "https://rayankazi.dev";
  const basePath = path.join(process.cwd(), "src", "app", "(main)");
  const currentDate = new Date().toISOString();

  const contentTypes = [
    {
      type: "blog",
      directory: path.join(basePath, "blog", "(posts)"),
      urlPath: "/blog",
    },
    {
      type: "notes",
      directory: path.join(basePath, "notes", "(notes)"),
      urlPath: "/notes",
    },
    {
      type: "projects",
      directory: path.join(basePath, "projects", "(write-ups)"),
      urlPath: "/projects",
    },
  ];

  const contentEntries = await Promise.all(
    contentTypes.map(async ({ directory, urlPath }) => {
      const slugs = await getFileSlugs(directory);
      return slugs.map((slug) => ({
        url: `${baseUrl}${urlPath}/${slug}`,
        lastModified: currentDate,
      }));
    })
  );

  const routes = ["/", "/experience", "/blog", "/notes", "/projects"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
    })
  );

  return [...contentEntries.flat(), ...routes];
}
