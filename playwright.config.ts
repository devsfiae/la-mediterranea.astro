// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests',
use: {
    baseURL: 'http://localhost:4321', // Passe den Port an deinen Astro-Server an
    browserName: 'chromium', // Du kannst auch firefox oder webkit verwenden
},
webServer: {
    command: 'npm run dev', // Startet den Astro-Server für Tests
    port: 4321,
    reuseExistingServer: !process.env.CI,
},
});