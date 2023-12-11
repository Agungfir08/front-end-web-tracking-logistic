import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'mtoefb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
