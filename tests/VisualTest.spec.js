const {test, expect} = require('@playwright/test');    
 
test('Frame example', async({browser})=>{
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://adactinhotelapp.com/");
    await expect(await page.screenshot()).toMatchSnapshot('loginPage.png');
    
    
}
);