import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
    public constructor(private readonly page: Page) {}


    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com/buttons');
    }

    //Buttons
    private get doubleClickBtn(): Locator {
        return this.page.locator('//button[@id="doubleClickBtn"]');
    }

    private get rightClickBtn(): Locator {
        return this.page.locator('//button[@id="rightClickBtn"]');
    }

    private get clickMeBtn(): Locator {
        return this.page.locator('//button[text()="Click Me"]');
    }

    // Actions
    public async doubleClick(): Promise<void> {
        await this.doubleClickBtn.dblclick();
    }

    public async rightClick(): Promise<void> {
        await this.rightClickBtn.click({ button: 'right' });
    }

    public async dynamicClick(): Promise<void> {
        await this.clickMeBtn.waitFor({ state: 'visible' });
        await this.clickMeBtn.click();
    }

    //Messages
    public get doubleClickMessage(): Locator {
        return this.page.locator('//p[@id="doubleClickMessage"]');
    }

    public get rightClickMessage(): Locator {
        return this.page.locator('//p[@id="rightClickMessage"]');
    }

    public get dynamicClickMessage(): Locator {
        return this.page.locator('//p[@id="dynamicClickMessage"]');
    }

}
