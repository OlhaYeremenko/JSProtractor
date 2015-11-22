browser.ignoreSynchronization = true;
var basePage = require('../pages/page.js');

var MainPage = function() {
      this.url = 'http://pn.com.ua/';
      this.pageLoaded = this.inDom($('.mlogo'));
      var categorySelector = '//a[@class="main_page_link_catalog"]';
      this.selectCategory = function(category) {
          var category=element(by.xpath(categorySelector + "[text()='" + category + "']"));
          category.click();
    };
};

MainPage.prototype = basePage; // extend basePage...
module.exports = new MainPage();
