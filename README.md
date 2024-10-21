# Project Explanation

Once you download/clone the project you will need to run the following command to install dependencies:
npm install

Under the foler ./tests you will find 2 different subfolders called: testsui and testsapi

Testsapi folder only contains 1 test class which could be run using the following commands:
cd ./tests/testsapi
npx playwright test prediktiveapi.spec.js

Testsui folder contains 2 subfolders called config which holds some common functions that can be used on different tests and
locators that contains the classes listing the locators according to the page that is being referenced. Tests can be run with the following coomands:
cd ./tests/testsui
npx playwright test prediktiveui --headed

Under each test you can find the explanation of the code.
