describe('OLX Tests', () => {
    before(() => {
        cy.visit('https://www.olx.ua/uk/', { timeout: 30000 });
        cy.url().should('include', '/uk/');
    });

    it('Search for Samsung', () => {
        cy.get('input[data-testid="search-input"]').should('be.visible').type('Samsung');
        cy.get('button[data-testid="search-submit"]').click();

        cy.intercept('GET', '**/api/v1/**').as('dataLoad');
        cy.wait('@dataLoad', { timeout: 20000 });

        cy.get('div[data-testid="listing-grid"]').should('exist').should('be.visible');
        cy.url().then((url) => {
            Cypress.env('searchResultsUrl', url);
            cy.log(`Saved Search URL: ${url}`);
        });
    });

    it('Click on the first item', () => {
        const searchResultsUrl = Cypress.env('searchResultsUrl');
        assert.isNotEmpty(searchResultsUrl, 'Search Results URL should be saved from previous test');
        cy.visit(searchResultsUrl, { timeout: 30000 });
        cy.get('div[data-testid="listing-grid"]', { timeout: 30000 })
            .should('exist')
            .should('be.visible')
            .find('div.css-u2ayx9 a.css-qo0cxu')
            .eq(0)
            .click();

        cy.url().then((url) => {
            Cypress.env('listingUrl', url);
            cy.log(`Saved Listing URL: ${url}`);
        });
    });

    it('Check if the page has the "Message" and "Order" buttons', () => {
        const listingUrl = Cypress.env('listingUrl');
        assert.isNotEmpty(listingUrl, 'Listing URL should be saved from previous test');
        cy.visit(listingUrl, { timeout: 30000 });
        cy.get('button[data-testid="ad-contact-message-button"]').should('be.visible');
        cy.get('button[data-test="button-buy"]').should('be.visible');
    });

    after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
});
