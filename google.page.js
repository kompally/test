module.exports = {
    webElements: {
        txtSearch: function(){
            return element(by.id('site-search'));
        },
        btnSubmit: function(){
            return element(by.id('site-search-submit'));
        },
        lblSearchResults: function(){
            return element(by.css('.container.content>h2'));
        }
    },

    isSearchBarShown: function(){
        return this.txtSearch().isDisplayed();
    },
    isSearchButtonShown: function(){
            return this.btnSubmit().isDisplayed();
    },
    enterText: function(searchtxt){
        this.txtSearch().sendKeys(searchtxt);
    },
    clickSearch: function(){
        this.btnSubmit().click();
    },
    isSearchResultsShown: function(){
       return this.lblSearchResults().isDisplayed();
    }

}