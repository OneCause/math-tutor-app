describe('random math app', () => {
    it('can make calculations', () => {
        cy.visit('/')
        cy.get('.x-value').as('first-value')
        cy.get('.y-value').as('second-value')
        cy.get('.mat-button-wrapper')
            .click()
            .findByTestId('total')
    })
})