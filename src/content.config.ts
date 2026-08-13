import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    interest: z
      .enum(["development", "art", "gamedev", "life"])
      .optional(),
  }),
});

export const collections = { thoughts };
