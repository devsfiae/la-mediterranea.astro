// src/pages/api/test.ts
import type { APIRoute } from 'astro';

export const prerender = false;  // Macht die Route zur Laufzeit verfügbar

export const get: APIRoute = async () => {
  return new Response(
    JSON.stringify({ message: "API route is working!" }),  // Einfache JSON-Nachricht
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    }
  );
};