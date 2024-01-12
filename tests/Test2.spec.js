const {test,expect} = require('@playwright/test'); 

test('Hotel Reservation System',async({page})=>  // page fixture
 {
    test.slow();
   await  page.goto("https://adactinhotelapp.com/");
   await  expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
   await page.locator('//select[@id="location"]').selectOption('Sydney');
   await page.locator('//select[@id="hotels"]').selectOption({index:1});
   await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
   await page.locator('//select[@id="hotels"]').selectOption(2);
   await page.locator('id=Submit').click();
   await page.locator()
 }
);
 