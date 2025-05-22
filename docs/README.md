# Math Tutor App – QA Take-Home Submission

## Overview

This repository contains my QA-focused submission for the OneCause Senior Test Engineer take-home exercise. It includes:

- ✅ A test plan outlining test scope, strategy, tools, and risk areas
- ✅ Manual test cases, including happy path, negative path, and edge behaviors
- ✅ Cypress end-to-end tests for core functionality
- ✅ Unit tests targeting core logic within the main component:
  - `AppComponent`: validates random number generation, input parsing, and result evaluation
- ✅ Future coverage notes highlighting next-phase testing areas like accessibility and cross-platform support

---

## How to Run the App

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npx ng serve
   ```

3. Visit the app at:
   ```
   http://localhost:4200
   ```

---

## Running Tests

### Unit Tests (Jasmine + Karma)

```bash
ng test
```

**Unit test files are located in:**

```
src/app/app.component.spec.ts
```

### E2E Tests (Cypress)

```bash
npx cypress open
```

Tests are located in: `cypress/e2e/`

---

## Documentation

All test documentation is located in the `docs/` folder:

| File                       | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| `test-plan.md`             | QA test strategy, scope, and tooling overview              |
| `test-cases.md`            | Manual test scenarios (happy, negative, edge cases)        |
| `future-coverage-notes.md` | Areas noted for future testing (accessibility, i18n, etc.) |

---

## Notes and Approach

- Focused test coverage on core application behavior
- Documented actual input handling, without assuming undefined behavior was incorrect
- Identified but did not automate scenarios that rely on browser quirks or non-critical edge inputs
- Avoided stepping into BA or product decisions; noted non-ideal UX separately

---

## Validation Flow Observations

A number of edge cases (TC04, TC09–TC15) revealed that the app lacks a complete inline validation flow. While it correctly blocks invalid inputs and disables the "Answer" button for malformed entries, this behavior is not surfaced to the user in an intuitive way. Specifically:

- The app does **not implement inline field-level validation** (e.g., red borders or helper error messages).
- All feedback occurs **after form submission** via toast notifications.
- Inputs like `3abc` or `4.2.2` are partially parsed but may lead to confusion if not reflected visually.
- The button state acts as a proxy for validation, but its behavior is not explained or reinforced visually.

This results in a passive validation experience that depends on browser behavior rather than explicit UX cues. While functionally sound, it reduces user confidence and discoverability.

---

## Final Thoughts

This submission reflects how I approach QA as a blend of strategy, automation, and user empathy. I'm happy to walk through the test structure and discuss edge cases or decisions during the live interview.

---

## Reference Documents

- 📋 [Test Plan](docs/test-plan.md)
- 📄 [Test Cases](docs/test-cases.md)
- 🔮 [Future Coverage Notes](docs/future-coverage-notes.md)

## 📁 Project Structure

```
.
├── README.md
├── package.json
├── angular.json
├── tsconfig.json
├── tsconfig.spec.json
├── src/
│   └── app/
│       ├── app.component.ts
│       ├── app.component.spec.ts
│       └── services/
│           ├── calculator-service/
│           │   └── calculator.service.ts
│           └── message-service/
│               └── message.service.ts
├── cypress/
│   ├── e2e/
│   │   └── core-functionality.cy.ts
│   ├── fixtures/
│   └── support/
│       └── commands.ts
├── docs/
│   ├── test-plan.md
│   ├── test-cases.md
│   ├── future-coverage-notes.md
│   └── slides/
│       ├── takehome-presentation.md
│       └── takehome-presentation.pdf
```
