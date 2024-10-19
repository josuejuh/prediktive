// @ts-check
// @ts-ignore
import { test, expect } from '@playwright/test';
const mainpage = require('./locators/mainpage');
const utilities = require('./config/utilities');



test("TC01 - Search 'android' and assert suggestions to contain the same word", async ({ page }) => {

    //Declaring variable to access the locators class
    const mainPage = new mainpage(page);

    await page.goto('https://start.duckduckgo.com/');

    await mainPage.searchBox.fill('android');

    await mainPage.listItems.first().waitFor({ state: 'visible' });

    console.log('Number of list items: ' + await mainPage.listItems.count());

    for (let i = 0; i < await mainPage.listItems.count(); i++) {

        let value = await mainPage.listItems.nth(i).textContent();

        expect(value?.toLowerCase()).toContain('android');

        console.log('Item ' + i + ' with value: "' + value + '" contains the word "android"')
    }

    await utilities.sleep(2000);

});

test("TC02 - Search 'android', retrieve all elements of modal and assert total count is greater than 10", async ({ page }) => {

    //Declaring variable to access the locators class
    const mainPage = new mainpage(page);

    await page.goto('https://start.duckduckgo.com/');

    await mainPage.searchBox.fill('android');

    await mainPage.searchButton.click();

    await mainPage.regionsButton.first().waitFor({ state: 'visible' });

    await mainPage.regionsButton.click();

    const options = await mainPage.listRegions.evaluateAll(elements =>
        elements.map(el => el.textContent)
    );

    const regionsArray = String(options).match(/([A-Z][a-z]+(?: [a-z]+)?(?: \([a-z]{2}\))?)/g);

    console.log("Avaliable region(s) are: " + regionsArray);

    // @ts-ignore
    console.log("Number of available regions:", regionsArray.length);

    // @ts-ignore
    expect(regionsArray.length).toBeGreaterThan(10);

    await utilities.sleep(4000);



});


