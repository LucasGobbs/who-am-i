import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getSortedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  return (await getCollection("projects"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
