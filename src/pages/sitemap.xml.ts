import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

export async function GET() {
  const thoughts = (await getCollection("thoughts"))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const projects = (await getCollection("projects"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const staticRoutes = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/resume/", priority: "0.9", changefreq: "monthly" },
    { url: "/projects/", priority: "0.8", changefreq: "monthly" },
    { url: "/thoughts/", priority: "0.8", changefreq: "weekly" },
    { url: "/about/", priority: "0.7", changefreq: "monthly" },
    { url: "/tools/", priority: "0.6", changefreq: "monthly" },
  ];

  const thoughtUrls = thoughts.map((t) => ({
    url: `/thoughts/${t.id}/`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: t.data.date.toISOString().split("T")[0],
  }));

  const projectUrls = projects.map((p) => ({
    url: `/projects/${p.id}/`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: p.data.date.toISOString().split("T")[0],
  }));

  const allUrls = [...staticRoutes, ...thoughtUrls, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.url}</loc>
    <priority>${entry.priority}</priority>
    <changefreq>${entry.changefreq}</changefreq>${
      "lastmod" in entry ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
