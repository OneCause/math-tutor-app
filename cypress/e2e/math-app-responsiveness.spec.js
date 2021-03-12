describe('The math application should be responsive', () => {

    it('The math application can come in many shapes and sizes', function () {
        cy.visit('/');
        cy.title().should('eq', 'MathTutorApp')
        cy.pause() //pause allows the user to manually go through the different screen sizes.
        cy.viewport('macbook-15')
        cy.viewport('macbook-13')
        cy.viewport('macbook-11')
        cy.viewport('ipad-2', 'landscape')
        cy.viewport('ipad-2', 'portrait')
        cy.viewport('ipad-mini', 'landscape')
        cy.viewport('ipad-mini', 'portrait')
        cy.viewport('iphone-x', 'landscape')
        cy.viewport('iphone-x', 'portrait')
        cy.viewport('samsung-s10', 'landscape')
        cy.viewport('samsung-s10', 'portrait')
    });
})
