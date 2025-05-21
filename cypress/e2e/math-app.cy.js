import selectors from '../support/selectors/mathAppComponent.json'

const { xValue, yValue, userInput, answerButton } = selectors

describe('Math Challenge - Core Functionality', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.waitForMathChallenge()
  })

  it('TC01: shows correct alert for correct input', () => {
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
