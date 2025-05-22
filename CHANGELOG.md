# Changelog

## [0.2.0] - 2025-05-22

### Documentation
* Update test plan and README to reflect AppComponent as sole unit test target
* Add TSDoc comments for Cypress TC01–TC04 tests
* Organize documentation into dedicated `docs/` directory

### Testing
* Finalize TC01–TC04 Cypress tests with structured assertions and selector cleanup
* Add test for invalid characters (TC04)
* Add support for toast assertions and input validation feedback

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
