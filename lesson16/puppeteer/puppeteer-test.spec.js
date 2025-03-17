import puppeteer from 'puppeteer';
import assert from 'assert';

(async () => {
    const browser = await puppeteer.launch({ headless: false, devtools: true, slowMo: 250 });
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    
    // Precondition: Open OLX
    await page.goto('https://www.olx.ua/', { waitUntil: 'networkidle2' });
    console.log("Precondition: Passed");

    // Step 1: Search for Samsung
    const searchInput = await page.waitForSelector('input[data-testid="search-input"]', { visible: true });
    assert.ok(searchInput, "Step 1 Failed: Search input not found");
    await page.type('input[data-testid="search-input"]', 'Samsung');    

    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }), 
        page.click('button[data-testid="search-submit"]')
    ]);
    console.log("Step 1: Passed");    

    // Step2: Click on the first item   
    const listing = await page.waitForSelector("div[data-testid='listing-grid'] div.css-u2ayx9 a.css-qo0cxu", { visible: true });
    assert.ok(listing, "Step 2 Failed: List of items not found");
    //assert.ok(listing > 0, "Step 2 Failed: List of items is empty");
    
    if (listing) {
        await listing.click();
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
    }
    console.log("Step 2: Passed");

    // Step3: Check if the page has the 'Message' and 'Order' buttons
    const messageButton = await page.waitForSelector('button[data-testid="ad-contact-message-button"]', { visible: true });
    assert.ok(messageButton, "Step 3 Failed: 'Message' button not found");
    
    const orderButton = await page.waitForSelector('button[data-test="button-buy"]', { visible: true });
    assert.ok(orderButton, "Step 3 Failed: 'Order' button not found");

    console.log("Step 3: Passed");
    await browser.close();
})();