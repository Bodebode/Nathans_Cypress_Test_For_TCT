const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4cmjj9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
