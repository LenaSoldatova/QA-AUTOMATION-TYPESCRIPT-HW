import { Page, Locator } from 'playwright';

export class TextBoxPage {
    public constructor(private readonly page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://demoqa.com/text-box');
    }

    public async fillForm(name: string, email: string, current: string, permanent: string): Promise<void> {
        await this.page.locator('#userName').fill(name);
        await this.page.locator('#userEmail').fill(email);
        await this.page.locator('#currentAddress').fill(current);
        await this.page.locator('#permanentAddress').fill(permanent);
    }

    public async submitForm(): Promise<void> {
        await this.page.locator('#submit').click();
    }

    public get outputName(): Locator {
        return this.page.locator('#name');
    }

    public get outputEmail(): Locator {
        return this.page.locator('#email');
    }
}
