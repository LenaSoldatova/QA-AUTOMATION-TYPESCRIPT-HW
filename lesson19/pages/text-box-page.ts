import { Page, Locator } from '@playwright/test';
import { SideMenu } from '../components/side-menu';

export class TextBoxPage {
    private readonly sideMenu = new SideMenu(this.page);

    public get outputBox(): Locator {
        return this.page.locator('//div[@id="output"]');
    }

    public get outputName(): Locator {
        return this.page.locator('//p[@id="name"]');
    }

    public get outputEmail(): Locator {
        return this.page.locator('//p[@id="email"]');
    }

    private get fullNameInput(): Locator {
        return this.page.locator('//input[@id="userName"]');
    }

    private get emailInput(): Locator {
        return this.page.locator('//input[@id="userEmail"]');
    }

    private get currentAddressInput(): Locator {
        return this.page.locator('//textarea[@id="currentAddress"]');
    }

    private get permanentAddressInput(): Locator {
        return this.page.locator('//textarea[@id="permanentAddress"]');
    }

    private get submitButton(): Locator {
        return this.page.locator('//button[@id="submit"]');
    }
    public constructor(private readonly page: Page) {}


    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com');
        await this.sideMenu.expandElements();
        await this.sideMenu.openSubmenuItem('Text Box');
    }

    public async fillForm(data: { name: string; email: string; currentAddress: string; permanentAddress: string }): Promise<void> {
        await this.fullNameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.currentAddressInput.fill(data.currentAddress);
        await this.permanentAddressInput.fill(data.permanentAddress);
    }
    
    public async submitForm(): Promise<void> {
        await this.submitButton.click();
    }
    
}
