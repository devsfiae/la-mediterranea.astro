// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests',
use: {
    baseURL: 'http://localhost:3000', // Passe den Port an deinen Astro-Server an
    browserName: 'chromium', // Du kannst auch firefox oder webkit verwenden
},
webServer: {
    command: 'npm run dev', // Startet den Astro-Server für Tests
    port: 3000,
    reuseExistingServer: !process.env.CI,
},
});