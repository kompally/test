var googlePage = require("./google.page.js");

describe("search npm",function(){

    beforeAll(function() {
        browser.get("https://www.npmjs.com/");
    });

    it("should have search bar shown", function(){
        expect(googlePage.isSearchBarShown()).toBe(true);
    });

    it("should have search button shown", function(){
            expect(googlePage.isSearchButtonShown()).toBeTruthy();
        });

    it("should search for jasmine", function(){
        googlePage.enterText("jasmine");
        googlePage.clickSearch();
        expect(googlePage.isSearchResultsShown()).toBeTruthy();
    });


})