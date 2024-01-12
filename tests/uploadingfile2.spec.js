const {test, expect} = require('@playwright/test');    
 
test('upload example', async({page})=>{
    await page.goto("http://autopract.com/selenium/upload2/");
    const[filechooser]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//a[@id="pickfiles"]').click()

    ])
   //await filechooser.setFiles('test/1.txt');
   await filechooser.setFiles({name:'file.txt',mimetype:'txt/plain',buffer:Buffer.from('this is a sample file.')})
   await page.locator('//a[@id="uploadfiles"]').click();
}
);