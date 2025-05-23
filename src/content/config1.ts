// src/content/config.ts
import { defineCollection, z } from "astro:content";

const podcastsCollection = defineCollection({
  schema: z.object({
    title: z.string(), // Título del episodio del podcast
    description: z.string(), // Descripción del episodio
    date: z.string(),
    estreno: z.string(),
  }),
});

export const collections = {
  podcasts: podcastsCollection, 
};
