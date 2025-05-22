# Changelog

## [0.4.3] - 2025-05-22

### Chore

- **format**: normalize whitespace and indentation across 28 files using Prettier
  - Applied Prettier formatting to `.ts`, `.js`, `.html`, `.css`, and `.md` files
  - Removed unnecessary line breaks, fixed misaligned returns, and improved readability

## [0.3.1] - 2025-05-22

### Documentation
* Add rendered Marp presentation PDF to deliverables
* Update `README.md` with full project file tree diagram
* Fix and validate relative links to test plan, test cases, and future coverage notes

## [0.3.0] - 2025-05-22

### Testing
* Add Jasmine unit tests for AppComponent logic
  - checkAnswer() for success and failure
  - resetForm() and generateXandY() paths covered
* Use service mocking for DI test isolation
* Ensure type-safe test environment separation (Jasmine vs Cypress)

### Documentation
* Add future-coverage-notes.md
* Add TSDoc comments for Jasmine test methods

## [0.2.0] - 2025-05-21

### Documentation
* Add rendered Marp presentation PDF to deliverables
* Update `README.md` with file structure and markdown links
* Update CHANGELOG for version tag tracking and deliverable notes

## [0.1.0] - 2025-05-21

### Testing
* Refactor test to use selector JSON file via destructured import
* Refactor test to use data-testid selectors and validate alert behavior
* Add data-testid hooks to support Cypress E2E test selectors

### Documentation
* Add test plan and manual test cases

### Chore
* Opt out of angular telemetry
* Add commitizen support and changelog script
* Add changelog generation using conventional-changelog-cli
* Apply security updates via npm audit fix
* Update changelog with test refactor entries

Initial release of the math tutor application with basic functionality and testing infrastructure.
