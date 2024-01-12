const {test, expect} = require('@playwright/test');    
 
test('Test pop up', async({page})=>
    {
        //Trigger an Alert
        await page.goto("http://autopract.com/selenium/alert5/");
        page.on ('Alert',async dialog=>{
            expect(dialog.type()).toContain('Alert');
            expect(dialog.message()).toContain('This is an Alert Box.');
            await dialog.accept();
        });
        await page.locator('//button[@id="alert-button"]').click();
        await expect(page.locator('//p[@id="msg"]')).toHaveText('You clicked on Ok button.');

    }
);
test('Test pop up2',async({page})=>{

    // Trigger a confirmation
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('Alert',async dialog=>{
    expect(dialog.type()).toContain('Confirmation');
    expect(dialog.message()).toContain('Do you want to save changes?');
    await dialog.accept(); // for ok button 
    await dialog.dismiss(); // for the cancel button
   });
   await page.locator('//button[@id="confirm-button"]').click();
}
);

test('Test pop up3',async({page})=>{

    // Trigger a prompt
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('dailog',async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter any number');
    //await dialog.fill('12');
    await dialog.accept('12');
   });
   await page.locator('//button[@id="prompt-button"]').click();
   await expect(page.locator('//p[@id="msg"]')).toHaveText('You have entered number: 12');
}
);