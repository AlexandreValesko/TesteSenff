/// <reference types="Cypress" />
describe('Teste e2e', () => {
   
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
        })
        cy.visit('https://restful-api.dev')
    });


    it('Valida o titulo do site ', () => {
        cy.title().should('be.equal', 'REST API - ready to use')
    });

    it('Clicar no Rest Fundamentals', () => {
        cy.contains('Rest Fundamentals').click()
        cy.url().should('eq', 'https://restful-api.dev/rest-fundamentals#rest')
    });

    it('Clicar no Privacy Policy', () => {
        cy.contains('Privacy Policy')
            .click()
            .wait(1000)
        cy.url().should('eq', 'https://restful-api.dev/privacy-policy#text')
            
    });

    it('Clicar no Contact', () => {
        cy.contains('Contact').click()
        cy.url().should('eq', 'https://restful-api.dev/contact#email')
    });
});