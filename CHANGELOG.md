# Changelog

## [0.3.0] - 2025-05-22

### Testing
* Add Jasmine unit tests for AppComponent (random number generation, input parsing, answer evaluation)
* Refactor `tsconfig.spec.json` to isolate Jasmine types and prevent Cypress type pollution
* Mock CalculatorService and MessageService dependencies in AppComponent test
* Fix AppComponent test runner compatibility with DI services

### Documentation
* Update test plan to document deferred MessageService unit test
* Add TODO guidance for mocking ToastrService and ToastConfig in future tests

## [0.2.0](Erikande/math-tutor-app/compare/v0.1.0...v0.2.0) (2025-05-22)

## [0.2.0](Erikande/math-tutor-app/compare/v0.1.0...v0.2.0) (2025-05-22)

## [0.2.0](Erikande/math-tutor-app/compare/v0.1.0...v0.2.0) (2025-05-22)

## [0.2.0](Erikande/math-tutor-app/compare/v0.1.0...v0.2.0) (2025-05-22)

# Changelog

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
