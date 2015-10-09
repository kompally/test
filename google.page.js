 google = {
    elements: {
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
        console.log(this.elements.txtSearch());
        return this.elements.txtSearch().isDisplayed();
    },
    isSearchButtonShown: function(){
            return this.elements.btnSubmit().isDisplayed();
    },
    enterText: function(searchtxt){
        this.elements.txtSearch().sendKeys(searchtxt);
    },
    clickSearch: function(){
        this.elements.btnSubmit().click();
    },
    isSearchResultsShown: function(){
       return this.elements.lblSearchResults().isDisplayed();
    }

};

module.exports = google;