import '@testing-library/cypress/add-commands'
import './commands'

// Note: @testing-library/cypress is included by default, but I chose not to use it.
// I prefer native Cypress commands (`cy.get`) with explicit `data-testid` selectors
// to keep this project lean, predictable, and free of third-party abstraction layers.