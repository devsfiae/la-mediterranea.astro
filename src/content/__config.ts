import { slide } from 'astro/virtual-modules/transitions.js';
import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';


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

export const slideCollection = {
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
    persons: personsCollection,
    slides: slideCollection
};