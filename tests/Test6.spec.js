import { test, expect } from '@playwright/test';

/*test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('gulshifamansoori');
  await page.locator('#password').click();
  await page.locator('#password').press('CapsLock');
  await page.locator('#password').fill('G');
  await page.locator('#password').press('CapsLock');
  await page.locator('#password').fill('Gul@2024');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});*/

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('shoes');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('._2UzuFa').first().click();
  const page1 = await page1Promise;
});