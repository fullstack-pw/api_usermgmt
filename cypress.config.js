const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    supportFile: false,
    specPattern: 'cypress/integration/**/*.spec.js',
  },
});
