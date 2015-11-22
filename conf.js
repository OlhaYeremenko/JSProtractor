var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    seleniumServerJar: "node_modules/selenium-server/lib/runner/selenium-server-standalone-2.44.0.jar",
    specs: ['specs/scenario*.js'],
 //   specs: ['specs/scenarioWithMaxAndMinPrice.js'],
    framework: 'jasmine2',

    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(8000);
        browser.manage().window().maximize();
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        browserName: 'firefox'
    },

    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
        print: function () {},
        defaultTimeoutInterval: 50000
    }
};
