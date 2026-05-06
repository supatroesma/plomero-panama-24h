import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.enum(['emergencias', 'mantenimiento', 'tips', 'precios', 'guias', 'problemas']),
    tags: z.array(z.string()),
    targetKeyword: z.string(),
    author: z.string().default('Equipo Plomero Panamá 24h'),
    draft: z.boolean().default(false),
    howTo: z.boolean().default(false),
    howToSteps: z
      .array(
        z.object({
          name: z.string(),
          text: z.string(),
        })
      )
      .optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
