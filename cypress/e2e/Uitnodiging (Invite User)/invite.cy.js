
describe('Invalid Scenarios', () => {
    const baseUrl = Cypress.env('baseUrl');
    const emailUser = Cypress.env('emailUser');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
        cy.get('input[name="email"]').type('admin@expinc.io')
        cy.get('input[name="password"]').type('password')
        cy.get('button').contains('AANMELDEN').click()
        cy.get('.css-ov5d0v > .MuiButtonBase-root').click()
        describe('Invalid Scenarios', () => {
            const baseUrl = Cypress.config('baseUrl');
            const emailUser = Cypress.config('emailUser');
        
            it('Invite user with not registered e-mail', () => {
                cy.get('input[name="email"]').should('be.visible').type('bagus12345@expinc.io');
                cy.get('input[name="first_name"]').should('be.visible').type('bagus&!!');
                cy.get('input[name="last_name"]').should('be.visible').type('Prawira&"!£');
                cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
                cy.get('p').should('be.visible').and('contain', 'Error: Email not registered');
            });
        
            it('Invite user with wrong e-mail format', () => {
                cy.get('input[name="email"]').should('be.visible').type('bagus.expinc.io');
                cy.get('input[name="first_name"]').should('be.visible').type('bagus&!!');
                cy.get('input[name="last_name"]').should('be.visible').type('Prawira&"!£');
                cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
                cy.get('p').should('be.visible').and('contain', 'Error: Invalid email format');
            });
        
            it('Invite with invalid first name format', () => {
                cy.get('input[name="email"]').should('be.visible').type(emailUser);
                cy.get('input[name="first_name"]').should('be.visible').type('bagus&!!&!!');
                cy.get('input[name="last_name"]').should('be.visible').type('Prawira&"!£');
                cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
                cy.get('p').should('be.visible').and('contain', 'Error: Invalid first name');
            });
        
            it('Invite with valid last name', () => {
                cy.get('input[name="email"]').should('be.visible').type(emailUser);
                cy.get('input[name="first_name"]').should('be.visible').type('bagus&!!');
                cy.get('input[name="last_name"]').should('be.visible').type('Prawira&"!£');
                cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
                cy.get('p').should('be.visible').and('contain', 'Error: Invalid last name');
            });
        });
        
        describe('Valid Scenarios', () => {
            const baseUrl = Cypress.config('baseUrl');
            const emailUser = Cypress.config('emailUser');
        
            it('Invite user with valid e-mail', () => {
                cy.get('input[name="email"]').should('be.visible').type(emailUser);
                cy.wait(5000);
                cy.get('input[name="first_name"]').should('be.visible').type('bagus');
                cy.get('input[name="last_name"]').should('be.visible').type('Prawira');
                cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
                cy.get('p').should('be.visible').and('contain', 'Invitation sent successfully');
            });
        });
        
    
describe('Redirection to Other Sections', () => {
    const baseUrl = Cypress.env('baseUrl');
    const emailUser = Cypress.env('emailUser');
  

    it('Accept invitation button redirect to create new password page', () => {
        cy.get('input[name="email"]').type(emailUser)
        cy.get('input[name="first_name"]').type('bagus')
        cy.get('input[name="last_name"]').type('prawira')
        cy.contains('button', 'NODIG NU UIT').click();
        cy.pause()
        
    });
