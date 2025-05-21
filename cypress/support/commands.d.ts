/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Waits until the math challenge is fully rendered by checking that both operands are non-empty
     */
    waitForMathChallenge(): Chainable<void>

    /**
     * Asserts that a success toast (e.g. .toast-success) appears with the expected text.
     * @param expectedText The visible text content of the success toast
     */
    expectSuccessToast(expectedText: string): Chainable<void>

    /**
     * Asserts that an error toast (e.g. .toast-error) appears with the expected text.
     * @param expectedText The visible text content of the error toast
     */
    expectErrorToast(expectedText: string): Chainable<void>
  }
}
