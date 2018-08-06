// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  devServer: null,
  browser: null,
  before: function (browser) {
    this.devServer = browser.globals.devServerURL
  },
  beforeEach: function (browser) {
    this.browser = browser.url(this.devServer).waitForElementVisible('#app', 2000)
  },
  'Application should have navbar, footer and body components.': function () {
    this.browser
      .assert.elementPresent('.application-navbar')
      .assert.elementPresent('.application-footer')
      .assert.elementPresent('.application-body')
      .end()
  }
}
