import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getSortedThoughts(): Promise<
  CollectionEntry<"thoughts">[]
> {
  return (await getCollection("thoughts"))
    .filter((t) => !t.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
