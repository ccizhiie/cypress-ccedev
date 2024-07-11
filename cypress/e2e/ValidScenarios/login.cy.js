describe('Invalid Scenarios', () => {
    const baseUrl = Cypress.env('baseUrl');
    const emailUser = Cypress.env('emailUser');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
        // cy.get('svg').should('be.visible').click({ force: true });
    });

    it('login with email field empty', () => {
        cy.get('input[name="password"]').type('password12')
        cy.get('button').contains('AANMELDEN').click()
    });

    it('login with password field empty', () => {
        cy.get('input[name="email"]').type(emailUser)
        cy.get('button').contains('AANMELDEN').click()
    });

    it('Login with invalid email "not registered"', () => {
        cy.get('input[name="email"]').type('cecep12345@expinc.io')
        cy.get('input[name="password"]').type('password')
        cy.get('button').contains('AANMELDEN').click();
    });

    it('Login with invalid email "wrong format"', () => {
        cy.get('input[name="email"]').type('cecep.expinc.io')
        cy.get('input[name="password"]').type('password')
        cy.get('button').contains('AANMELDEN').click();
    });

    it('Login with invalid password, valid email', () => {
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="password"]').type('password1')
        cy.get('button').contains('AANMELDEN').click();
    });

    it('Login with invalid password, valid email 3 times', () => {
        const baseUrl = Cypress.env('baseUrl');
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="password"]').type('password1')
        cy.get('button').contains('AANMELDEN').click();
        cy.get('button').contains('Sluiten').click();
        cy.visit(baseUrl);
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="password"]').type('password1')
        cy.get('button').contains('AANMELDEN').click();
        cy.get('button').contains('Sluiten').click();
        cy.visit(baseUrl);
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="password"]').type('password1')
        cy.get('button').contains('AANMELDEN').click();
        cy.get('button').contains('Sluiten').click();
    });

});



describe('Redirection to Other Sections', () => {
    const baseUrl = Cypress.env('baseUrl');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
    });

    it('Forget Password redirect user to Forget Password Page', () => {
        cy.contains('Wachtwoord vergeten?').click();
    });

});  

describe('Valid Scenarios', () => {
    const baseUrl = Cypress.env('baseUrl');
    const emailUser = Cypress.env('emailUser');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
        // cy.get('svg').should('be.visible').click({ force: true });

    });
  
    it('login with valid email and password', () => {
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="password"]').type('password12')
        cy.get('button').contains('AANMELDEN').click();
    });
});