const {test, expect} = require('@playwright/test');    
 
test('Frame example', async({page})=>{
    await page.goto("http://autopract.com/selenium/iframe1/");

    //const myFrame=page.frame("testframe");
    //const myFrame=page.frame({name:"testframe"});
    //const myFrame=page.frame({url:"http://autopract.com/selenium/form1/"});
    const myFrame=page.frame({url:/form1/});
    await myFrame.fill("(//input[@class='form-control'])[1]","gul");
    await myFrame.locator('(//input[@class="form-control"])').nth(1).fill("gul@gmail.com");
}
);