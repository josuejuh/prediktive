import { test, expect, request } from '@playwright/test';

//Declarations of variables that will be used along the test script
let apiContext;
var jsonDBData, jsonPayloadData, merchantID, mrchnt_sk, addr_sk, agnt_sk, exist, prncpl_sk, principalID;


test('API Test: Get User Details', async ({ }) => {
  // Create a new API request context
  const apiRequestContext = await request.newContext();

  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'es-ES,es;q=0.9',
    'cache-control': 'max-age=0',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
};

  // Define the endpoint URL
  const url = 'https://api.duckduckgo.com/?q=simpsons&format=json'; // Replace with your API endpoint

  // Send a GET request to the endpoint
  const response = await apiRequestContext.get(url, {
    headers: headers
  });
  ;

  // Validate the response status
  expect(response.status()).toBe(200); // Check if the status is 200 (OK)

  // Validate the response body (example for a user detail response)
   const responseBody = await response.json();

   const relatedTopics = responseBody.RelatedTopics;

  relatedTopics.forEach(topic => {
        // Check if Icon is defined and has a non-empty URL
        if (topic.Icon && topic.Icon.URL) {
            console.log(`Icon URL: ${topic.FirstURL}${topic.Icon.URL}`);
        }
    });

});



