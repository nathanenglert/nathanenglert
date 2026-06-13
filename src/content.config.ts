import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    number: z.number(),
    tag: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { log };
