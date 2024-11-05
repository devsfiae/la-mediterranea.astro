import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://la-mediterranea.eu/');
  await page.getByRole('img', { name: 'Bar' }).click();
  await page.getByText('❮').click();
  await page.getByText('❯').click();
  await page.locator('.dots-container').click();
  await page.locator('div').filter({ hasText: 'La Mediterranea restaurant' }).locator('span').nth(1).click();
  await page.locator('div').filter({ hasText: 'La Mediterranea restaurant' }).locator('span').nth(2).click();
  await page.locator('div').filter({ hasText: 'La Mediterranea restaurant' }).locator('span').nth(3).click();
  await page.locator('div').filter({ hasText: 'La Mediterranea restaurant' }).locator('span').nth(4).click();
  await page.getByText('start').click();
  await page.getByLabel('food page').click();
  await page.getByLabel('drinks page').click();
  await page.getByLabel('reservation page').click();
  await page.getByLabel('about page').click();
  await page.locator('label span').click();
  await page.locator('label span').click();
  await page.getByRole('heading', { name: 'Puya Khandany' }).click();
  await page.getByRole('heading', { name: 'Irina Zittlau' }).click();
  await page.getByRole('heading', { name: 'Hiba Al Anssari' }).click();
  await page.getByRole('heading', { name: 'Heiko Fanieng' }).click();
  await page.getByText('Barkeeper, DJ und Mixologe.').click();
  await page.getByText('Kellnerin und Barista.').click();
  await page.getByText('Chefköchin und kulinarische').click();
  await page.getByText('Manager und Gastgeber.').click();
});