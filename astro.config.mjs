import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// https://astro.build/config
export default defineConfig({
  site: 'https://devsfiae.github.io/la-mediterranea.astro',
  // site: 'https://la-mediterranea.eu',
  base: '/',
  integrations: [react()], 
    vite: {
        build: {
          rollupOptions: {
            input: ['src/pages/index.astro'], // Hauptseiten für den Build
          },
        },
        optimizeDeps: {
          exclude: ['src/api/','playwright-report', 'tests', 'test-results', 'tests-examples', 'trash'], // Ausnahme von den Dependencies
          
        },
    },
});