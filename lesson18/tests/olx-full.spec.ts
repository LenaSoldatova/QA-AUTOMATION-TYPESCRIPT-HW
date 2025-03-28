import { test, expect } from '@playwright/test';
import { OlxPage } from '../pages/olx-page';

test.describe('OLX chained flow', () => {
    let olx: OlxPage;

    test.beforeEach(async ({ page }) => {
        olx = new OlxPage(page);
        await olx.openHomePage();
        await olx.closePopupIfVisible();
    });

    test('01. Search field should be visible', async () => {
        await expect(olx.searchInput).toBeVisible();
    });

    test('02. Search results should contain at least one item', async () => {
        await expect(olx.searchInput).toBeVisible();
        await olx.searchItem('Samsung');
        await expect(olx.searchResults).toBeVisible();
    });

    test('03. Item page should show "Message" and "Order" buttons', async () => {
        await expect(olx.searchInput).toBeVisible();
        await olx.searchItem('Samsung');
        await expect(olx.searchResults).toBeVisible();
        await expect(olx.firstListing).toBeVisible();

        await olx.clickFirstListing();
        await expect(olx.messageButton).toBeVisible();
        await expect(olx.orderButton).toBeVisible();
    });
});
