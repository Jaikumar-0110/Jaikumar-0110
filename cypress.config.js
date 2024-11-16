const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  video : true,
  retries:{
    runMode:1
  },
  projectId: "byoabu",
  env:{
    url:"https://rahulshettyacademy.com/angularpractice/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
