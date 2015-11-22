browser.ignoreSynchronization = true;
var basePage = require('../pages/page.js');

var SubcategoryPage = function() {
    this.subheader=element(by.css('#page-subheader'));
    this.categoryList=element(by.css('.column-content .category'));
    this.pageLoaded = this.inDom(this.subheader);

    var subcategorySelector = '//*[@class="column-content category"]//a';
    this.selectSubCategory = function(subcategory) {
        var subcategory=element(by.xpath(subcategorySelector + "[text()='" + subcategory + "']"));
        subcategory.click();
    };
};

SubcategoryPage.prototype = basePage; // extend basePage...
module.exports = new SubcategoryPage();
