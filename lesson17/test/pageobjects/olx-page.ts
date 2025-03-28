import { $, browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class OlxPage {
    public get searchInput(): ChainablePromiseElement {
        return $('input[data-testid="search-input"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return $('button[data-testid="search-submit"]');
    }

    public get searchResults(): ChainablePromiseElement {
        return $('div[data-testid="listing-grid"]');
    }

    public get firstListing(): ChainablePromiseElement {
        return $(`(//div[@data-testid="listing-grid"]//div[@class='css-u2ayx9']//a[@class='css-1tqlkj0'])[1]`);
    }

    public get messageButton(): ChainablePromiseElement {
        return $('button[data-testid="ad-contact-message-button"]');
    }

    public get orderButton(): ChainablePromiseElement {
        return $('button[data-test="button-buy"]');
    }

    public async openHomePage(): Promise<void> {
        await browser.url('https://www.olx.ua/');
        await this.searchInput.waitForDisplayed();
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
        await this.searchResults.waitForDisplayed();
    }

    public async clickFirstListing(): Promise<void> {
        this.firstListing.waitForDisplayed();
        await this.firstListing.click();
        this.messageButton.waitForDisplayed();
        this.orderButton.waitForDisplayed();
    }

}
