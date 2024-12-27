const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api-usermgmt.fullstack.pw',
    supportFile: false,
    specPattern: 'cypress/integration/**/*.spec.js',
  },
});
