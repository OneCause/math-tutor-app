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

  /**
 * TC01: Correct input submission
 *
 * Dynamically calculates the correct sum from the displayed operands,
 * enters it into the input field, and verifies that a success toast appears.
 *
 * @see ../fixtures/example.json          Toast message expectations
 * @see ../support/selectors/mathAppComponent.json  UI selector mapping
 * @see ../../test-cases.md               Manual test case definitions
 */
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

  /**
 * TC02: Incorrect input submission
 *
 * Enters an arbitrary incorrect value (`1000`) into the input field,
 * then submits and verifies that an error toast appears.
 *
 * @see ../fixtures/example.json
 * @see ../../test-cases.md
 */
  it('TC02: shows incorrect alert for wrong input', () => {
    cy.get(userInput)
      .should('be.visible')
      .focus()
      .type('1000', { force: true })

    cy.get(answerButton).click()
    cy.expectErrorToast(toastData.toastErrorMessage)
  })

  /**
 * TC03: Disabled button on empty input
 *
 * Verifies that the "Answer" button remains disabled when the input is empty.
 * Ensures the form cannot be submitted without user input.
 *
 * @see ../../test-cases.md
 */
  it('TC03: disables button when input is empty', () => {
    cy.get(answerButton).should('be.disabled')
  })

  /**
 * TC04: Blocked non-numeric characters
 *
 * Attempts to enter fully invalid non-numeric characters into the input field,
 * and verifies that the input remains empty (i.e., all characters are blocked).
 *
 * @see ../../test-cases.md
 */
  it('TC04: blocks non-numeric characters in input', () => {
  const fullyInvalidInputs = ['abc', '@', '!', '++', '--', '+-']

  fullyInvalidInputs.forEach((val) => {
    cy.get(userInput)
      .clear({ force: true })
      .type(val, { force: true })
      .should('have.value', '') // input remains empty
  })
})

  /**
   * TC10: Enables button on valid input
   *
   * Verifies that entering a valid numeric input enables the "Answer" button.
   *
   * @see ../../test-cases.md
   */
  it('TC10: enables button on valid numeric input', () => {
    cy.get(userInput)
      .type('42', { force: true })

    cy.get(answerButton)
      .should('not.be.disabled')
  })

  /**
   * TC11: Error toast for valid but incorrect signed input
   *
   * Submits a signed number (e.g., -13) that is syntactically valid but numerically incorrect,
   * and verifies that an error toast is shown.
   *
   * @see ../fixtures/example.json
   * @see ../../test-cases.md
   */
  it('TC11: shows error toast for valid but incorrect signed number', () => {
    cy.get(xValue).invoke('text').then((xText) => {
      cy.get(yValue).invoke('text').then((yText) => {
        const result = Number(xText.trim()) + Number(yText.trim())

        const signedWrongAnswer = '-' + result.toString()

        cy.get(userInput)
          .should('be.visible')
          .focus()
          .type(signedWrongAnswer, { force: true })

        cy.get(answerButton).click()
        cy.expectErrorToast(toastData.toastErrorMessage)
      })
    })
  })
})