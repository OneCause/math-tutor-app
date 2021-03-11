describe('Random math app happy path scenario', () => {

    it('Correct answer entered and success message appears', function () {
        cy.visit('/');
        cy.title().should('eq', 'MathTutorApp')
        cy.contains('Math Challenge').should('be.visible')
        cy.contains('Addition').should('be.visible')
        cy.get('[data-cy=answer_button]').should('be.disabled')
        cy.pause() // Pause used here so I can manually enter the correct answer before proceeding. I can speak more to this during the call. 
        cy.contains('That\'s right! Try another one.').should('be.visible');
        cy.screenshot();
    });
})