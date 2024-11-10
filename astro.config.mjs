import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// https://astro.build/config
export default defineConfig({
    integrations: [react()], 
});