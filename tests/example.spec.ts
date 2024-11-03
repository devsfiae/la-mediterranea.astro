// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage has correct title', async ({ page }) => {
await page.goto('/');
await expect(page).toHaveTitle(/start @ La Mediterranea/);
});