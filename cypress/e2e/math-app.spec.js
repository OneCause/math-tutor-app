describe('random math app', () => {
    it('can make calculations', () => {
        cy.visit('/')
        cy.get('[data-cy=xValue]').as('first-value')
        cy.get('[data-cy=yValue]').as('second-value')
        cy.get('.mat-button-wrapper')
            .click()
            .findByTestId('total')
    })
})