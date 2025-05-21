import selectors from '../support/selectors/mathAppComponent.json'

const { xValue, yValue, userInput, answerButton } = selectors

describe('random math app', () => {
  it('can make calculations', () => {
    cy.visit('/')

    cy.assertAlertText('Correct!')

    cy.get(xValue).invoke('text').then((xText) => {
      cy.get(yValue).invoke('text').then((yText) => {
        const result = Number(xText.trim()) + Number(yText.trim())

        cy.get(userInput).focus().type(result.toString(), { force: true })
        cy.get(answerButton).click()
      })
    })
  })
})
