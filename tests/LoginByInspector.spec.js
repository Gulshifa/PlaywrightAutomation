/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('gulshifamansoori');
  await page.locator('#password').click();
  await page.locator('#password').fill('Gul@2024');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#Submit')).toContainText('Search');
  await page.locator('#location').selectOption('Sydney');
  await page.getByRole('button', { name: 'Reset' }).click();
});*/


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('img', { name: 'Close Feedback' }).click();
  await page.getByRole('link', { name: 'Image Image Oppo Reno 10 incl' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'OPPO Reno10 5G (Ice Blue, 256' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByText('Remove').click();
  await page1.getByText('Remove').nth(2).click();
});

