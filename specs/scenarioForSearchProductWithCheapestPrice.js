//var stepsDescriptions = require('../stepDescriptions/stepsDescriptions');
var mainPage = require('../pages/mainPage');
var subcategoryPage = require('../pages/subcategoryPage');
var productListPage = require('../pages/productListPage');
var cheapestProduct;

describe ('ScenarioForSearchProductWithCheapestPrice', function() {

    it('Go to pn.com.ua', function() {
        mainPage.goTo();
        mainPage.waitToPageLoad();
    });

    it('I select "Компьютеры" as products category', function() {
        mainPage.selectCategory("Компьютеры");
    });

    it('I select "Настольные компьютеры" as subcategory', function() {
        subcategoryPage.selectSubCategory("Настольные компьютеры");
        expect(productListPage.subheader.getText()).toBe('Настольные компьютеры в Харькове');
    });

    it('I sort products by price', function() {
        productListPage.selectSortByPriceFilter();
        productListPage.waitToPageLoad();
    });

    it('I get the product name with cheapest price ', function() {
     productListPage.getProductNameWithCheapestPrice().then(function(text){
            console.log("the product name with cheapest price ["+ text+" ]");
            cheapestProduct=text;
        });
    });

    it('I search that product by name', function() {
        productListPage.search(cheapestProduct);
        });

    it('I see that product', function() {
     productListPage.productsNameList.get(0).getText().then(
         function(text){
             expect(text).toBe(cheapestProduct);
         });

      productListPage.productsNameList.count().then(
          function(size){
              expect(size).toBe(1);});
    });
});