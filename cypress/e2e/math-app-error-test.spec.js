describe('Random math app error scenario', () => {

    it('Incorrect answer entered and warning message appears', function () {
        cy.visit('/');
        cy.get('[data-cy=inputHere]').type('1');
        cy.get('.mat-button-wrapper').click();
        cy.screenshot();
        cy.contains('Sorry, that is not correct. Please try again.').should('be.visible');
        cy.get('.ng-trigger > .ng-tns-c59-1').click();
    });
})