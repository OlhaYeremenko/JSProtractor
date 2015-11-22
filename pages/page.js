
var Page = function() {
    var EC = protractor.ExpectedConditions;

    this.inDom = function (locator) {
        return EC.presenceOf(locator);
    };

    this.isVisible = function(locator) {
        return EC.isVisible(locator);
    };

    this.goTo = function () {
        browser.get(this.url, this.timeout.xl);
        return this.waitToPageLoad();
    };
    this.waitToPageLoad = function () {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    this.waitSmall = function () {
        return browser.wait(this.pageLoaded(), this.timeout.s);
    };

    this.waitLong = function () {
        return browser.wait(this.pageLoaded(), this.timeout.l);
    };
    this.waitXLong = function () {
        return browser.sleep(this.timeout.xl)
    };

    this.timeout = {
        's': 1000,
        'l': 5000,
        'xl': 9000
    };
};
module.exports = new Page();