import { Page, Locator } from '@playwright/test';

export class SideMenu {
    public get elementsMenu(): Locator {
        return this.page.locator("xpath=//h5[normalize-space()='Elements']");
    }

    public constructor(private readonly page: Page) {}

    public async expandElements(): Promise<void> {
        await this.elementsMenu.waitFor({ state: 'visible' });
        await this.elementsMenu.click();
    }

    public async openSubmenuItem(name: string): Promise<void> {
        const submenu = this.page.locator(`xpath=//span[normalize-space()="${name}"]`);
        await submenu.waitFor({ state: 'visible' });
        await submenu.click();
    }
}

