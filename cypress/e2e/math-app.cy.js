import selectors from '../support/selectors/mathAppComponent.json'

const { xValue, yValue, userInput, answerButton } = selectors


describe('Math Challenge - Core Functionality', () => {
  let toastData

  before(() => {
    cy.fixture('example').then((data) => {
      toastData = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
    cy.waitForMathChallenge()
  })

  it('TC01: shows correct alert for correct input', () => {
    cy.get(xValue).invoke('text').then((xText) => {
      cy.get(yValue).invoke('text').then((yText) => {
        const result = Number(xText.trim()) + Number(yText.trim())

        cy.get(userInput).focus().type(result.toString(), { force: true })
        cy.get(answerButton).click()
        cy.expectSuccessToast(toastData.toastSuccessMessage)
      })
    })
  })

  it('TC02: shows incorrect alert for wrong input', () => {
    cy.get(userInput).should(`be.visible`)
      .as('userInput')

    cy.get('@userInput').focus().type('1000', { force: true })
     cy.get(answerButton).click()
     cy.expectErrorToast(toastData.toastErrorMessage)
  })
})
