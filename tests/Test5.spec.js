const {test,expect} = require('@playwright/test'); 

test ('Browser In Incognito mode',async({browser})=>
{
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('http://www.google.com/');
  await  expect(page).toHaveTitle("Google");

  await context.close();
}
);