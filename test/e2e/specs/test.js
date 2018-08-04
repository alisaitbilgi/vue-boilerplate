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
  },
  'First tab should be selected on initial page load.': function () {
    this.browser
      .assert.elementPresent('.first-tab-container')
      .end()
  },
  'DataBadge should display nzakas github account on initial page load as default selected.': function () {
    this.browser
      .waitForElementPresent('.user-name', 2000)
      .assert.containsText('.user-name', 'Nicholas C. Zakas')
      .end()
  },
  'Details table should display related users detailed account datas when user clicks the button': function () {
    this.browser
      .waitForElementPresent('.user-name', 5000)
      .assert.hidden('.table-body')
      .click('.see-details-btn')
      .waitForElementPresent('.table-body', 1000)
      .assert.elementPresent('.table-body')
      .assert.containsText('.each-field-data', 'nzakas')
      .end()
  },
  'Second tab should display Tooltip and the Dropdown when user selects second page.': function () {
    this.browser
      .click('#second-tab')
      .waitForElementPresent('.second-tab', 100)
      .assert.elementPresent('.second-tab')
      .assert.elementPresent('.explanation-container')
      .assert.elementPresent('.user-selection-container')
      .end()
  },
  'DataBadge should be displayed with selected users git data when a user is selected from dropdown.': function () {
    this.browser
      .click('#second-tab')
      .waitForElementPresent('.second-tab', 100)
      .click('.multiselect')
      .click('.multiselect__element')
      .waitForElementPresent('.user-name', 2000)
      .assert.containsText('.user-name', 'Nicholas C. Zakas')
      .end()
  }
}
