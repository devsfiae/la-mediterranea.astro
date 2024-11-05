import { defineCollection, z } from 'astro:content';

const foodCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        subcategory: z.string(), // Meat dishes or seafood specialties
        image: z.string().optional(),
    }),
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
    food: foodCollection,
    persons: personsCollection,
};

