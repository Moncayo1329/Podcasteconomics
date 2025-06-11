// src/content/config.ts
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    date: z.string(),
    title: z.string(),
    descripcion: z.string(),
    estreno: z.string(),
  }),
});


const podcastsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    estreno: z.string(),
  }),
});


export const collections = {
  posts: postsCollection,
 podcasts: podcastsCollection,
};
