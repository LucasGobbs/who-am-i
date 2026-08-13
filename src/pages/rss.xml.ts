import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../consts";

export async function GET(context: { site: URL }) {
  const thoughts = (await getCollection("thoughts"))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_URL,
    items: thoughts.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/thoughts/${entry.id}/`,
    })),
  });
}
