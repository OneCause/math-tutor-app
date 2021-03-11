describe('Random math app error scenario', () => {

    it('Incorrect answer entered and warning message appears', function () {
        cy.visit('/');
        cy.title().should('eq', 'MathTutorApp')
        cy.get('[data-cy=inputHere]').type('0');
        cy.get('.mat-button-wrapper').click();
        cy.screenshot();
        cy.contains('Sorry, that is not correct. Please try again.').should('be.visible');
        cy.get('.ng-trigger > .ng-tns-c59-1').click();
        cy.pause()
        cy.contains('That\'s right! Try another one.').should('be.visible');
    });
})