const {test, expect} = require('@playwright/test');    
 
test('upload example', async({page})=>{
    await page.goto("http://autopract.com/selenium/upload1/");
    //await page.locator('//input[@type="file"]').setInputFiles('test/1.txt','test/2.txt');// uploading multiple files
    await page.setInputFiles("//input[@type='file']",'test/1.txt');// single file 
    await page.locator('//button[@type="submit"]').click();


}
);