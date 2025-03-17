describe('OLX Tests', () => {
    beforeEach(() => {
        // Precondition: Open OLX
        cy.visit('https://www.olx.ua/uk/', { timeout: 30000 });
        cy.url().should('include', '/uk/');
    });

    it('Search for Samsung', () => {
        // Step 1: Search for Samsung
        cy.get('input[data-testid="search-input"]').should('be.visible').type('Samsung');
        cy.get('button[data-testid="search-submit"]').click();

        // Ожидание загрузки списка товаров
        cy.intercept('GET', '**/api/v1/**').as('dataLoad');
        cy.wait('@dataLoad', { timeout: 20000 });

        cy.get('div[data-testid="listing-grid"]').should('exist').should('be.visible');

        //     cy.url().then((searchUrl) => {
        //         Cypress.env('searchResultsUrl', searchUrl);
        //     });

        // });

        // it('Open Second Listing Page and Check Buttons', () => {
        //     cy.visit(Cypress.env('searchResultsUrl'));
        // Step2: Click on the first item
        cy.get('div[data-testid="listing-grid"]', { timeout: 20000 })
            .should('exist')
            .should('be.visible')
            .find('div.css-u2ayx9 a.css-qo0cxu')
            .eq(1) // Выбираем **второй элемент** списка
            .click();


        // Step3: Check if the page has the 'Message' and 'Order' buttons
        cy.url().should('include', '/uk/obyavlenie/');
        cy.get('button[data-testid="ad-contact-message-button"]').should('be.visible');
        cy.get('button[data-test="button-buy"]').should('be.visible');
    });

    after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
});
