/**
 * @fileoverview Cypress E2E tests for the Math Tutor app's core functionality.
 *
 * This suite includes:
 * - TC01: Correct input → success toast
 * - TC02: Incorrect input → error toast
 * - TC03: Empty input → button disabled
 * - TC04: Non-numeric characters blocked
 *
 * Tests rely on:
 * - Selectors defined in a centralized selector map
 * - Toast messages pulled from a fixture file
 *
 * Some edge cases (e.g., TC13: leading '+') are excluded due to Cypress limitations
 * with <input type="number"> and must be tested manually.
 *
 * @see ../fixtures/example.json — fixture with expected toast messages
 * @see ../support/selectors/mathAppComponent.json — centralized data-testid selectors
 * @see ../../test-cases.md — full manual test case documentation
 */
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
  cy.get(userInput)
    .should('be.visible')
    .focus()
    .type('1000', { force: true })

  cy.get(answerButton).click()
  cy.expectErrorToast(toastData.toastErrorMessage)
})

    it('TC03: disables button when input is empty', () => {
    cy.get(answerButton).should('be.disabled')
  })

  it('TC04: blocks non-numeric characters in input', () => {
  const fullyInvalidInputs = ['abc', '@', '!', '++', '--', '+-']

  fullyInvalidInputs.forEach((val) => {
    cy.get(userInput)
      .clear({ force: true })
      .type(val, { force: true })
      .should('have.value', '') // input remains empty
  })
})
})