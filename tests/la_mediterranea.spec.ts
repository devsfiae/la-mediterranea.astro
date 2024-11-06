import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await page.locator('#content-wrapper label span').click();
  await page.locator('#content-wrapper label span').click();
  await page.getByLabel('food page').click();
  await page.getByLabel('drinks page').click();
  await page.getByLabel('event page').click();
  await page.getByLabel('contact page').click();
  await page.getByLabel('about page').click();
  await page.getByRole('heading', { name: 'Heiko Fanieng' }).click();
  await page.getByRole('heading', { name: 'Hiba Al Anssari' }).click();
  await page.getByRole('heading', { name: 'Irina Zittlau' }).click();
  await page.getByRole('heading', { name: 'Puya Khandany' }).click();
  await page.getByRole('img', { name: 'Heiko Fanieng' }).click();
  await page.getByRole('img', { name: 'Hiba Al Anssari' }).click();
  await page.getByRole('img', { name: 'Irina Zittlau' }).click();
  await page.getByRole('img', { name: 'Puya Khandany' }).click();
  await page.getByRole('img', { name: 'Holger Kramer' }).click();
  await page.getByText('known for his inspiring').click();
  await page.getByText('Motivator, Mentor & pace-').click();
});