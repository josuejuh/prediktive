class mainpage {
    constructor(page) {
        this.page = page;
        // Define locators
        this.searchBox = page.locator("#searchbox_input");
        this.listItems = this.page.locator("#listbox--1 > li");
        this.searchButton = this.page.locator("//button[@type='submit']");
        this.regionsButton = this.page.locator("//div[@class='UWzy821Y58lvrLxQ7fnz WiAwXRBfyDliy0tc5wSj']//span[@class='sG3VWKPgDjJAlSrJSoLP']");
        this.listRegions = this.page.locator("//div[contains(@class,'fCp5GIWYTsUwPglO0ME2 eRQYVfFPOfM6ezz54H_V AgWckucr2h5uZCHmaoMA')]");
        //this.listRegions = this.page.locator('div[data-testid="region-dropdown-options"] a');

        //("//div[@data-testid='dropdown-options']");

        
    }
};


module.exports = mainpage;