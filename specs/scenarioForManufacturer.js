//var stepsDescriptions = require('../stepDescriptions/stepsDescriptions');
var mainPage = require('../pages/mainPage');
var subcategoryPage = require('../pages/subcategoryPage');
var productListPage = require('../pages/productListPage');

describe ('ScenarioForManufacturer', function() {

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

    it('I select "ASUS" as manufacturer', function() {
        productListPage.selectManufacturer("ASUS");
    });

    it('I see that products name contain manufacturer name', function() {
        productListPage.productsNameList.each(function(product, index){
            product.getText().then(function(text){
                expect(text.toUpperCase()).toContain("ASUS");
            })
        })
    });
    it('I see that product count', function() {
        productListPage.expectedCountOfProduct.getText().then(function(count){
            expect(parseInt(count)).toBe(productListPage.productsNameList.count());
        })

    });
});