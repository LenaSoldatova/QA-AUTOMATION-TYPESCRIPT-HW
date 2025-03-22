import { OlxPage } from '../pageobjects/olx-page';
import { expect } from 'expect-webdriverio';

const olxPage = new OlxPage();

describe('OLX Tests', () => {
    before(async () => {
        await olxPage.openHomePage();
    });

    afterEach(async () => {
        console.log("Postcondition: Cleaning up page state");
        await olxPage.closePopupIfVisible();
    });

    it('Search field should be visible', async () => {
        await expect(olxPage.searchInput).toBeDisplayed();
    });

    it('Search results should contain at least one item', async () => {
        await olxPage.searchItem('Samsung');
        const firstItem = await olxPage.firstListing;
        await expect(firstItem).toBeDisplayed();
    });

    it('Item page should show "Message" and "Order" buttons', async () => {
        await olxPage.clickFirstListing();
        await olxPage.waitForPageToLoadByOBJL(olxPage.messageButton, 'Expected item page to load with message button visible');
        await expect(await olxPage.messageButton.isDisplayed()).toBe(true);
        await expect(await olxPage.orderButton.isDisplayed()).toBe(true);

        await expect(olxPage.messageButton).toBeDisplayed();
        await expect(olxPage.orderButton).toBeDisplayed();
    });
});
