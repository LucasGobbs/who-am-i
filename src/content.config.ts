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

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    role: z.string().default("Creator"),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    interest: z
      .enum(["development", "art", "gamedev", "life"])
      .optional(),
  }),
});

export const collections = { thoughts, projects };
