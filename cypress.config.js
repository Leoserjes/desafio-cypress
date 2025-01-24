module.exports = {
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true
    },
    baseUrl: 'https://serverest.dev',
  }
};