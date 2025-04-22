import { test, expect } from '@playwright/test';

test('user can add a transaction and see it in the list', async ({ page }) => {
  // Go to homepage
  await page.goto('/');

  // Wait for the page to load
  await expect(page.getByRole('heading', { name: 'Expense Tracker App' })).toBeVisible();

  //Аdd a transaction
  await page.locator('#description').fill("Test Transaction");
  await page.locator('#transactionamount').fill('100');


  // Click on the "Add Transaction" button
  await page.getByRole('button', { name: 'Add Transaction' }).click();

  // Wait for the transaction to be added to the list
  await expect(page.getByText('Test Transaction')).toBeVisible();
  await expect(page.getByText('+$100')).toBeVisible();
});