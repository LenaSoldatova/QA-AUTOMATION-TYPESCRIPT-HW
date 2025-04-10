import { IWorldOptions, setWorldConstructor, World, Before, After } from '@cucumber/cucumber';
import { BrowserContext, Page, chromium } from 'playwright';
import { TextBoxPage } from '../../pages/text-box-page.ts';

export class RobotDreamsWorld extends World {
    public context!: BrowserContext;
    public page!: Page;
    private _textBoxPage!: TextBoxPage;


    public constructor(options: IWorldOptions) {
        super(options);
    }

    public get textBoxPage(): TextBoxPage {
        if (!this.page) throw new Error('Playwright page not initialized!');
        if (!this._textBoxPage) {
            this._textBoxPage = new TextBoxPage(this.page);
        }
        return this._textBoxPage;
    }
}

Before(async function (this: RobotDreamsWorld) {
    const browser = await chromium.launch({
        headless: process.env.HEADLESS !== 'false'
    });
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: RobotDreamsWorld) {
    await this.context?.close();
});

setWorldConstructor(RobotDreamsWorld);
