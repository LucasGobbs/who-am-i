import type { CollectionEntry } from "astro:content";

export type Lang = "en" | "br";

const PT_SUFFIX = "-br";

/** A `-br.md` sibling of a canonical entry is that entry's pt-BR translation.
 *  Dots in entry ids are stripped during slugification, so the marker is a
 *  trailing dash-suffix instead (filename `post-br.md`, entry id `post-br`). */
export function isPtVariant(id: string): boolean {
  return id.endsWith(PT_SUFFIX);
}

export function baseSlug(id: string): string {
  return isPtVariant(id) ? id.slice(0, -PT_SUFFIX.length) : id;
}

export function groupThoughtsByLang(all: CollectionEntry<"thoughts">[]) {
  const en = new Map<string, CollectionEntry<"thoughts">>();
  const br = new Map<string, CollectionEntry<"thoughts">>();
  for (const entry of all) {
    if (isPtVariant(entry.id)) br.set(baseSlug(entry.id), entry);
    else en.set(entry.id, entry);
  }
  return { en, br };
}
