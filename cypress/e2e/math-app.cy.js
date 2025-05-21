describe('random math app', () => {
  it('can make calculations', () => {
    cy.visit('/')

    // Listen for the alert event instead of stubbing
    cy.on('window:alert', (str) => {
      expect(str).to.eq('Correct!')
    })

    cy.get('[data-testid="x-value"]').invoke('text').then((xText) => {
      cy.get('[data-testid="y-value"]').invoke('text').then((yText) => {
        const x = Number(xText.trim())
        const y = Number(yText.trim())
        const total = x + y

        cy.get('[data-testid="user-input"]')
          .focus()
          .type(total.toString(), { force: true })

        cy.get('[data-testid="answer-button"]').click()
      })
    })
  })
})
