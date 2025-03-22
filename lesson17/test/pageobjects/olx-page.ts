import { $, browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class OlxPage {
    public get searchInput(): ChainablePromiseElement {
        return $('input[data-testid="search-input"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return $('button[data-testid="search-submit"]');
    }

    public get firstListing(): ChainablePromiseElement {
        return $('div[data-testid="listing-grid"] div.css-u2ayx9 a.css-qo0cxu');
    }

    public get messageButton(): ChainablePromiseElement {
        return $('button[data-testid="ad-contact-message-button"]');
    }

    public get orderButton(): ChainablePromiseElement {
        return $('button[data-test="button-buy"]');
    }

    public async openHomePage(): Promise<void> {
        await browser.url('https://www.olx.ua/');
    }

    public async closePopupIfVisible(): Promise<void> {
        const closePopup = await $('button[data-testid="popup-close"]');
        if (await closePopup.isExisting()) {
            await closePopup.click();
        }
    }

    public async searchItem(query: string): Promise<void> {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(query);
        await this.searchButton.click();
        const searchURL = "q-" + query;
        await this.waitForPageToLoadByURL(searchURL);
    }

    public async waitForPageToLoadByURL(query: string): Promise<void> {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(query),
            {
                timeout: 10000,
                timeoutMsg: `Expected URL to include ${query} after search`
            }
        );
    }

    public async waitForPageToLoadByOBJL(obj: ChainablePromiseElement, message: string): Promise<void> {
        await obj.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: message
        });
    }

    public async clickFirstListing(): Promise<void> {
        this.waitForPageToLoadByOBJL(this.firstListing, 'Expected at least one listing to be visible');
        await this.firstListing.click();
    }

}
