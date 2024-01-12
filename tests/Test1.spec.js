const {test,expect} = require('@playwright/test'); 

test('Google title assertion',async({page})=>  // page fixture
 {
   await  page.goto("http://www.google.com");
   await  expect(page).toHaveTitle("Google");
 }
);
