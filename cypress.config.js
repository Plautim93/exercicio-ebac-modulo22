const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 30000,
    specPattern: [
      "cypress/e2e/account/createAccount.cy.js",
      "cypress/e2e/login/loginAccount.cy.js",
      "cypress/e2e/checkout.cy.js",
      "cypress/e2e/spec.cy.js"
    ],
    setupNodeEvents(on, config) {
    },
  },
});