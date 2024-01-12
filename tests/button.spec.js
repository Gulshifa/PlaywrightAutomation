const {test,expect} = require('@playwright/test'); 

test('Hotel Reservation System',async({page})=>  // page fixture
 {
   await  page.goto("https://adactinhotelapp.com/");
   await  expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
   await  page.locator('id=username').type('gulshifamansoo');
   await  page.locator('id=password').type('Gul@204');
   await  page.locator('id=login').click();
   const err = await(await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
   expect(err).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password')
 }
);
 