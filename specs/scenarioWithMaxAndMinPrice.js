//var stepsDescriptions = require('../stepDescriptions/stepsDescriptions');
var mainPage = require('../pages/mainPage');
var subcategoryPage = require('../pages/subcategoryPage');
var productListPage = require('../pages/productListPage');

describe ('ScenarioWithMaxAndMinPrice', function() {

    it('Go to pn.com.ua', function() {
        mainPage.goTo();
        mainPage.waitToPageLoad();
    });

    it('I select "Компьютеры" as products category', function() {
        mainPage.selectCategory("Компьютеры");
    });

    it('I select "Ноутбуки, планшеты" as subcategory', function() {
        subcategoryPage.selectSubCategory("Ноутбуки, планшеты");
        expect(productListPage.subheader.getText()).toBe("Ноутбуки в Харькове");
    });

   it('I set maximum price to "6000" and min price to "2000"', function() {
       productListPage.setMaxPrice("6000");
       productListPage.setMinPrice("2000");
       productListPage.waitToPageLoad();

   });

    it('Verify that prices were filtered', function() {
        productListPage.verifyFilteredPrices("6000","2000");
    });

});