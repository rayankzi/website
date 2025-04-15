import { getMDXMetadata } from "./(main)/actions";

async function getMDXRoutes(type: "blog" | "projects" | "notes") {
  const baseUrl = "https://rayankazi.dev";
  const currentDate = new Date().toISOString();
  const data = await getMDXMetadata(type);

  return data.map((entry) => ({
    url: `${baseUrl}${entry.href}`,
    lastModified: currentDate,
  }));
}

export default async function sitemap() {
  const baseUrl = "https://rayankazi.dev";
  const currentDate = new Date().toISOString();

  const postRoutes = await getMDXRoutes("blog");
  const projectRoutes = await getMDXRoutes("projects");
  const notesRoutes = await getMDXRoutes("notes");

  const otherRoutes = ["/", "/experience", "/blog", "/notes", "/projects"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
    })
  );

  return [...otherRoutes, ...postRoutes, ...projectRoutes, ...notesRoutes];
}
