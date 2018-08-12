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
  },
  'Application should fetch todo list items on initial page load and display empty message when there exist no todo': function () {
    this.browser
      .waitForElementVisible('.empty-list-explanation', 2000)
      .assert.elementPresent('.empty-list-explanation')
      .assert.elementPresent('.empty-list-explanation')
      .assert.containsText('.empty-list-explanation', 'You have nothing TO DO, right ?')
      .end()
  }
}
