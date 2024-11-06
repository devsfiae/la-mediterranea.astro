// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:4321', // Passe den Port an deinen Astro-Server an
        browserName: 'chromium', // Nutzt die Chromium-Engine, ähnlich wie Safari
    },
    webServer: {
        command: 'npm run dev', // Startet den Astro-Server für Tests
        port: 4321,
        reuseExistingServer: !process.env.CI,
    },
});