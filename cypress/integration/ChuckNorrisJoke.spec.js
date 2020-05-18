/// <reference types="cypress" />
describe('REST API Testing with Cypress', () => {
    
    it('API Test-Validate Status Code', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('chucknorris')
        cy.get('@chucknorris').its('status').should('equal',200)
    })
    
})