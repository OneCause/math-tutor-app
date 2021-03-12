describe('Random math app happy path scenario', () => {

    it('Correct answer entered and success message appears', function () {
        cy.visit('/');
        cy.title().should('eq', 'MathTutorApp')
        cy.contains('Math Challenge').should('be.visible')
        cy.contains('Addition').should('be.visible')
        cy.get('[data-cy=answer_button]').should('be.disabled')
        cy.get('[data-cy=answer_button]').click({ force: true })
        cy.pause() // Pause used here so I can manually enter the correct answer before proceeding. I can speak more to this during the call. I'm unfamiliar how to add/calculate a total with Cypress.
        cy.contains('That\'s right! Try another one.').should('be.visible');
        cy.screenshot();
    });
})