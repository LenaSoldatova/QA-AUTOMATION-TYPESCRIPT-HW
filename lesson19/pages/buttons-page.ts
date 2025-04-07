import { Page, Locator } from '@playwright/test';
import { SideMenu } from '../components/side-menu';

export class ButtonsPage {
    public constructor(private readonly page: Page) {}
    private readonly sideMenu = new SideMenu(this.page);

    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com');
        await this.sideMenu.expandElements();
        await this.sideMenu.openSubmenuItem('Buttons');
    }

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

    public get doubleClickMessage(): Locator {
        return this.page.locator('//p[@id="doubleClickMessage"]');
    }

    public get rightClickMessage(): Locator {
        return this.page.locator('//p[@id="rightClickMessage"]');
    }

    public get dynamicClickMessage(): Locator {
        return this.page.locator('//p[@id="dynamicClickMessage"]');
    }

    private get doubleClickBtn(): Locator {
        return this.page.locator('//button[@id="doubleClickBtn"]');
    }

    private get rightClickBtn(): Locator {
        return this.page.locator('//button[@id="rightClickBtn"]');
    }

    private get clickMeBtn(): Locator {
        return this.page.locator('//button[text()="Click Me"]');
    }
}
