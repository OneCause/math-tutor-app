/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to assert the next window.alert has the expected text
     * @param expectedText The string you expect the alert to contain
     */
    assertAlertText(expectedText: string): Chainable<void>
  }
}
