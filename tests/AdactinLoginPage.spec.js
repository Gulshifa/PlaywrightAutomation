const {test,expect} = require('@playwright/test');

const{LoginPage}= require('../pages/LoginPage');
 test('Login test',async({page})=>{
    const name = "ArunGurusamy";
    const pwd = "30529S";

    const lp = new LoginPage(page);
    await lp.goTo();
    await lp.login(name,pwd);
 })