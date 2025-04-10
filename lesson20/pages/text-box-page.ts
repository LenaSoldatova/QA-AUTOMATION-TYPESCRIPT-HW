import { Page, Locator } from 'playwright';

export class TextBoxPage {
    public constructor(private readonly page: Page) {}

    public get outputName(): Locator {
        return this.page.locator('#name');
    }

    public get outputEmail(): Locator {
        return this.page.locator('#email');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com/text-box');
    }

    public async fillForm(data: {
        name: string;
        email: string;
        currentAddress: string;
        permanentAddress: string;
    }): Promise<void> {
        await this.page.locator('#userName').fill(data.name);
        await this.page.locator('#userEmail').fill(data.email);
        await this.page.locator('#currentAddress').fill(data.currentAddress);
        await this.page.locator('#permanentAddress').fill(data.permanentAddress);
    }
    public async submitForm(): Promise<void> {
        await this.page.locator('#submit').click();
    }
}
