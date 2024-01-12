class LoginPage{
    constructor(page)
    {
       this.page=page;
       this.userName=page.locator('id=username');
       this.password=page.locator('id=password');
       this.loginBtn=page.locator('#login').click();
    }

    /*async goTo() 
    {
        await this.page.goto("https://adactinhotelapp.com/index.php");

    }*/
    async launchURL() {
        await this.page.goto("https://adactinhotelapp.com/")
    }
    
    async login(uName,pass)
    {
        await this.userName.type(uName);
        await this.password.type(pass);
        await this.loginBtn.click();
       }

}
module.exports={LoginPage}