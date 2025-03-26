import { test, expect } from '@playwright/test';
import { OlxHomePage } from '../pages/olx-home-page';

test.describe('OLX.ua homepage tests', () => {
    test('should load the homepage and show the logo', async ({ page }) => {
        const olx = new OlxHomePage(page);
        await olx.goto();
        await expect(await olx.isLogoVisible()).toBeTruthy();
    });

    test('should search for "велосипед"', async ({ page }) => {
        const olx = new OlxHomePage(page);
        await olx.goto();
        await olx.searchFor('велосипед');
        await expect(page).toHaveURL(/search/);
        await expect(page.locator('h1')).toContainText('велосипед');
    });
});
