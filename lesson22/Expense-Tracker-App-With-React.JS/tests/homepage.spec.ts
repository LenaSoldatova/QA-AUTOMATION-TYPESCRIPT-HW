import { test, expect } from '@playwright/test';

test('Main page opened', async ({ page }) => {  

  // Navigate to the base URL
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Optional: wait until page shows heading
  await page.waitForSelector('h2');

  // Log the page title
  console.log(await page.title());

  // Assert heading is visible
  await expect(page.getByRole('heading', { name: 'Expense Tracker App', level: 2 })).toBeVisible();
});
