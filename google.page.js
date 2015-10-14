 google = {
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
        return this.webElements.txtSearch().isDisplayed();
    },
    isSearchButtonShown: function(){
            return this.webElements.btnSubmit().isDisplayed();
    },
    enterText: function(searchtxt){
        this.webElements.txtSearch().sendKeys(searchtxt);
    },
    clickSearch: function(){
        this.webElements.btnSubmit().click();
    },
    isSearchResultsShown: function(){
       return this.webElements.lblSearchResults().isDisplayed();
    }

};

module.exports = google;