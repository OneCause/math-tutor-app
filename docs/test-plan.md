# Test Plan – Math Tutor App

## Purpose

This document outlines the testing approach for the Math Tutor application. It includes coverage strategy across unit, E2E, and manual test layers, and is intended to guide both implementation and future maintenance.

---

## Scope

### In Scope

- Addition logic for two randomly generated numbers
- User input validation and feedback
- UI behavior triggered by interaction (button click, alert)
- Coverage via Cypress E2E and Jasmine unit tests

### Out of Scope

- Non-addition operations (e.g., subtraction/multiplication)
- Persistence, authentication, or any API interactions
- Full accessibility testing (see future notes). Keyboard navigation and ARIA attribute validation were not included, as they were not part of the exercise scope.
- Cross-browser compatibility testing (e.g., Firefox, Safari, Edge)
- Viewport or responsive layout testing (e.g., tablet/mobile screen sizes)
- Mobile operating system testing (iOS, Android, etc.)

---

## Test Types and Tools

| Type   | Tooling           | Target                                                 |
| ------ | ----------------- | ------------------------------------------------------ |
| Unit   | Jasmine + Karma   | AppComponent logic (input handling, answer evaluation) |
| E2E    | Cypress           | Full user flow, from load to alert                     |
| Manual | N/A (exploratory) | Edge cases, keyboard use, numeric parsing              |

Tests follow standard Arrange-Act-Assert structure for unit testing, and user-centric scenarios for E2E.

---

## Environment

- Local Angular dev server (`ng serve`)
- Cypress runner (`npx cypress open`)
- Karma (`ng test`)

---

## Unit Testing Approach

Unit test coverage focuses on logic-level validation within the main application component:

### AppComponent

- ✅ Component creation
- ✅ `checkAnswer()` - success: shows success toast, calls `resetForm()`
- ✅ `checkAnswer()` - failure: shows error toast, calls `setFocus()`
- ✅ `resetForm()` - clears input, calls `generateXandY()` and `setFocus()`
- ✅ `generateXandY()` - calls `CalculatorService.generateNumber()` for both x and y

Mocks are used where applicable to isolate test behavior. Jasmine spies are used to verify method calls and messaging without triggering actual side effects.

### MessageService Testing (Deferred)

Direct unit testing of `MessageService` was deferred due to its dependency on `ToastrService` and `TOAST_CONFIG`, both of which require Angular DI configuration or mocking. This exceeds the scope of the current test cycle, as the toast integration is already indirectly verified via `AppComponent`.

**TODO:** In future iterations, introduce a mock `ToastrService` or test module that provides the required configuration to fully isolate and test `MessageService` logic directly.

---

## Risks and Assumptions

- Random number generation is deterministic per reload (assumed no flakiness)
- `window.alert()` used for UX; if replaced, Cypress tests may need adjustment
- Accessibility and mobile layout not prioritized in this round

---

## Additional Notes

Manual test cases are documented separately. This plan reflects MVP scope—future iterations may include test hooks, API interaction, and accessibility enhancements.
