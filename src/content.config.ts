import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().default('Budgt'),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

const blogTis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-tis' }),
  schema: postSchema,
});

export const collections = { blog, 'blog-tis': blogTis };
