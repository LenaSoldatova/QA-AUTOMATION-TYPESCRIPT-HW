import { Page, Locator } from '@playwright/test';

export class OlxPage {

    public constructor(private page: Page) {
    }

    private get searchButton(): Locator {
        return this.page.locator('button[data-testid="search-submit"]');
    }

    private get popupClose(): Locator {
        return this.page.locator('button[data-testid="popup-close"]');
    }

    public get searchInput(): Locator {
        return this.page.locator('input[data-testid="search-input"]');
    }

    public get searchResults(): Locator {
        return this.page.locator('div[data-testid="listing-grid"]');
    }

    public get firstListing(): Locator {
        return this.page.locator('div[data-testid="listing-grid"] div.css-u2ayx9 a').first();
    }

    public get messageButton(): Locator {
        return this.page.locator('button[data-testid="ad-contact-message-button"]');
    }

    public get orderButton(): Locator {
        return this.page.locator('button[data-test="button-buy"]');
    }

    public async openHomePage(): Promise<void> {
        await this.page.goto('https://www.olx.ua/');
        await this.searchInput.waitFor({ state: 'visible' });
    }

    public async closePopupIfVisible(): Promise<void> {
        if (await this.popupClose.isVisible()) {
            await this.popupClose.click();
        }
    }

    public async searchItem(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchButton.click();
        await this.searchResults.waitFor({ state: 'visible' });
    }

    public async clickFirstListing(): Promise<void> {
        await this.firstListing.waitFor({ state: 'visible' });
        await this.firstListing.click();
        await this.messageButton.waitFor({ state: 'visible' });
        await this.orderButton.waitFor({ state: 'visible' });
    }
}
