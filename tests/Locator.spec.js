const {test, expect} = require('@playwright/test');    
 
test('Locator example', async({page})=>
{
    // implicit role
    /*await page.goto("https://www.amazon.com/");
    await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click();
    await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill("gul134@gmail.com");
    await page.getByRole("button",{name:"Continue"}).click();*/

    //Explicit role
    //await page.goto("https://www.amazon.com/");
    //await page.getByRole("button",{name:"Open Menu"}).click();

     //  get by placeholder
    await page.goto("https://www.amazon.com/");
    //await page.getByPlaceholder("Search Amazon").fill("Laptop");
    await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click();
    await expect(page.locator('//lable[@class="a-form-label"]')).toHaveText('Email or mobile phone number');
    await page.locator('//input[@type="submit"]').click();

}
);