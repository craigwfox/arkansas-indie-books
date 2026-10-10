import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const stores = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/stores",
  }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    address: z.string(),
    city: z.string(),
    website: z.string().optional(),
    newBooks: z.boolean(),
    usedBooks: z.boolean(),
    image: z.string().nullable().optional(),
    categories: z.array(z.string()).optional(),
  }),
})

export const collections = { stores }
