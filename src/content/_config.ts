import { defineCollection, z } from 'astro:content';

const countries = defineCollection({
    loader: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
      return data.map((country) => ({
        id: country.cca3,
        ...country,

      }));

    },
    schema: /* ... */
  });

const personsCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        name: z.string(),
        position: z.string(),
        description: z.string(),
        category: z.number(), // customer or employee
        image: z.string().optional(),
    }),
});

export const slideCollections = {
    slides: defineCollection({
        schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        type: z.enum(['home', 'food', 'drinks', 'reservations', 'events']), // Identify slideshow type
        }),
    }),
};

export const collections = {
    countries: countries,
    persons: personsCollection,
};