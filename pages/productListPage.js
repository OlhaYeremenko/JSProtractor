browser.ignoreSynchronization = true;
var basePage = require('../pages/page.js');

var ProductListPage = function() {
    this.subheader=element(by.css('#page-subheader h1'));
    this.pageLoaded = this.inDom(this.subheader);
    this.sortPriceBtn=element(by.xpath("//a[contains(@href, 'sort=price')]"));
    this.productsNameList=element.all(by.css("div.name a"));
    this.searchField=element(by.css("input#edit-name-1"));
    this.submitSearchBtn=element(by.css("input#edit-submit-1"));
    this.expectedCountOfProduct=element(by.css("div.total b"));

    var maxPricesSelector='(//div[@class = "is_empty_items"])[2]/a';
    var minPricesSelector='(//div[@class = "is_empty_items"])[1]/a';
    var manufacturerSelector='(//div[@class = "is_empty_items"])[3]/a';


    this.selectSubCategory = function(category) { category.click();};

    this.setMinPrice=function (price ) {
        var pricePath = minPricesSelector+ "[text()='" + price + "']";
       element(by.xpath(pricePath)).click();
    };

    this.setMaxPrice=function (price ) {
        var pricePath = maxPricesSelector+ "[text()='" + price + "']";
        element(by.xpath(pricePath)).click();
    };

    this.selectManufacturer=function (manufacturer ) {
        var manufacturerPath = manufacturerSelector+ "[text()='" + manufacturer + "']";
        element(by.xpath(manufacturerPath)).click();
    };

    this.selectSortByPriceFilter=function() {
        this.sortPriceBtn.click();
    };

    this.getProductNameWithCheapestPrice=function() {
        return  this.productsNameList.get(0).getText();
    };
    this.search=function(text){
      this.searchField.sendKeys(text);
        this.submitSearchBtn.click();
    };
    this.verifyFilteredPrices = function(max,min){
        var numberPattern = /\d+/g;
        element.all(by.css('.price > strong')).each(function(element, index) {
            element.getText().then(function (text) {
                var actualPrice = parseInt(String(text.match(numberPattern)).replace(" ", "").replace(",",""));
                expect(actualPrice).toBeLessThan(max);
                expect(actualPrice).toBeGreaterThan(min);
            });
        });
    };
};

ProductListPage.prototype = basePage; // extend basePage...
module.exports = new ProductListPage();
