const {test, expect} = require('@playwright/test');    
 
test('model example', async({page})=>{
    page.goto("https://demo.cyclos.org/ui/dashboard");
    await page.locator('id=username').fill('demo');
    await page.locator('id=password').fill('1234');
    await page.locator('id=login').click();

    /*await page.locator('//a[@class="open-button"]').click();
    
    console.log(await page.locator('//div[@class="popup-content"]').textContent());
    await page.locator('//a[@class="close-button"]').click();*/
    
    
    }
    );