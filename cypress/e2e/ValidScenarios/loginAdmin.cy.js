
describe('Valid Scenarios', () => {
    const baseUrl = Cypress.config('baseUrl');
    const emailUser = Cypress.config('emailUser');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);

    });
  
    it('Login with valid email and password (admin)', () => {
        cy.get('input[name="email"]').type('admin@expinc.io')
        cy.get('input[name="password"]').type('password')
        cy.get('button').contains('AANMELDEN').click();
    });

    it('Login with valid email and password (user)', () => {
        cy.get('input[name="email"]').type('bagus@expinc.io')
        cy.get('input[name="password"]').type('password')   
        cy.get('button').contains('AANMELDEN').click()
    });

});