import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 900,
  viewportWidth: 400,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
