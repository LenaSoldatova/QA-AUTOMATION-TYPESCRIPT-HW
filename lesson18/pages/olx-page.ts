import { Page, Locator } from '@playwright/test';

export class OlxPage {
    public readonly searchInput: Locator;
    public readonly searchButton: Locator;
    public readonly searchResults: Locator;
    public readonly firstListing: Locator;
    public readonly messageButton: Locator;
    public readonly orderButton: Locator;
    public readonly popupClose: Locator;

    public constructor(private page: Page) {
        this.searchInput = page.locator('input[data-testid="search-input"]');
        this.searchButton = page.locator('button[data-testid="search-submit"]');
        this.searchResults = page.locator('//div[@data-testid="listing-grid"]');
        this.firstListing = page.locator('div[data-testid="listing-grid"] div.css-u2ayx9 a').first();
        this.messageButton = page.locator('button[data-testid="ad-contact-message-button"]');
        this.orderButton = page.locator('button[data-test="button-buy"]');
        this.popupClose = page.locator('button[data-testid="popup-close"]');
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
