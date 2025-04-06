import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
    public constructor(private readonly page: Page) {}

    public get fullNameInput(): Locator {
        return this.page.locator('#userName');
    }

    public get emailInput(): Locator {
        return this.page.locator('#userEmail');
    }

    public get currentAddressInput(): Locator {
        return this.page.locator('#currentAddress');
    }

    public get permanentAddressInput(): Locator {
        return this.page.locator('#permanentAddress');
    }

    public get submitButton(): Locator {
        return this.page.locator('#submit');
    }

    public get outputBox(): Locator {
        return this.page.locator('#output');
    }

    public get outputName(): Locator {
        return this.page.locator('#name');
    }

    public get outputEmail(): Locator {
        return this.page.locator('#email');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com/text-box');
    }

    public async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
        await this.fullNameInput.fill(name);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
    }

    public async submitForm(): Promise<void> {
        await this.submitButton.click();
    }
}
