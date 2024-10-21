// @ts-check
// @ts-ignore
import { test, expect } from '@playwright/test';
const mainpage = require('./locators/mainpage');
const utilities = require('./config/utilities');


test("TC01 - Search 'android' and assert suggestions to contain the same word", async ({ page }) => {

    //Declaring variable to access the locators class
    const mainPage = new mainpage(page);
    //Navigating to the website
    await page.goto('https://start.duckduckgo.com/');
    //Writing down the word 'android' on the search box
    await mainPage.searchBox.fill('android');
    //Waiting for the list of suggestions to be visible
    await mainPage.listItems.first().waitFor({ state: 'visible' });
    //Printing number of suggestions results
    console.log('Number of list items: ' + await mainPage.listItems.count());

    //Verifying is each value contains the word 'android'
    for (let i = 0; i < await mainPage.listItems.count(); i++) {
        let value = await mainPage.listItems.nth(i).textContent();
        //Assertion
        expect(value?.toLowerCase()).toContain('android');
        //Printing values
        console.log('Item ' + i + ' with value: "' + value + '" contains the word "android"')
    }
    //Wait implemented just for doing a small a pause, not necessary 
    await utilities.sleep(2000);

});

test("TC02 - Search 'android', retrieve all elements of modal and assert total count is greater than 10", async ({ page }) => {

    //Declaring variable to access the locators class
    const mainPage = new mainpage(page);
    //Navigating to the website
    await page.goto('https://start.duckduckgo.com/');
    //Searching for 'android'
    await mainPage.searchBox.fill('android');
    await mainPage.searchButton.click();
    //Waiting for Regions dropdown list to be visible
    await mainPage.regionsButton.first().waitFor({ state: 'visible' });
    //Clicking on Regions so the list can be visible
    await mainPage.regionsButton.click();
    //Inserting each element on an array
    const options = await mainPage.listRegions.evaluateAll(elements =>
        elements.map(el => el.textContent)
    );
    //Separating the elements with a regex expression
    const regionsArray = String(options).match(/([A-Z][a-z]+(?: [a-z]+)?(?: \([a-z]{2}\))?)/g);
    //Printing the available regions
    console.log("Avaliable region(s) are: " + regionsArray);
    //Printing the number of available regions
    // @ts-ignore
    console.log("Number of available regions:", regionsArray.length);
    //Doing the assertion to valdiate if the number of regions are greater than 10
    // @ts-ignore
    expect(regionsArray.length).toBeGreaterThan(10);

    //Wait implemented just for doing a small a pause, not necessary 
    await utilities.sleep(3000);

});


