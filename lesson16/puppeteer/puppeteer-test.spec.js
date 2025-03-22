import puppeteer from 'puppeteer';
import assert from 'assert';

describe('OLX Tests', function () {
    let browser, page;

    before(async function () {
        browser = await puppeteer.launch({ headless: false, devtools: true, slowMo: 250 });
        page = await browser.newPage();
        await page.goto('https://www.olx.ua/', { waitUntil: 'networkidle2' });
    });

    afterEach(async function () {
        console.log("Postcondition: Cleaning up page state");
        const closePopup = await page.$("button[data-testid='popup-close']");
        if (closePopup) {
            await closePopup.click();
        }
    });

    after(async function () {
        await browser.close();
    });

    it('Search for Samsung', async function () {
        const searchInput = await page.waitForSelector('input[data-testid="search-input"]', { visible: true });
        assert.ok(searchInput, "Step 1 Failed: Search input not found");
        await page.type('input[data-testid="search-input"]', 'Samsung');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2' }),
            page.click('button[data-testid="search-submit"]')
        ]);

    });
 

    it('Click on the first item', async function () {
        await page.waitForSelector("div[data-testid='listing-grid']", { visible: true });
        const listings = await page.$$("div[data-testid='listing-grid'] div.css-u2ayx9 a.css-qo0cxu");
        assert.ok(listings.length > 1, "Step 2 Failed: Less than 1 items found");
        await listings[0].click();
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    });

    it('Check if the page has the "Message" and "Order" buttons', async function () {
        const messageButton = await page.waitForSelector('button[data-testid="ad-contact-message-button"]', { visible: true });
        const orderButton = await page.waitForSelector('button[data-test="button-buy"]', { visible: true });
        assert.ok(orderButton, "Step 3 Failed: 'Order' button not found");
        assert.ok(messageButton, "Step 3 Failed: 'Message' button not found");
    });
});
