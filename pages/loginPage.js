class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginField = page.locator('[name="login"]');
        this.passwordField = page.locator('[name="pass"]');
        this.button = page.locator('button', { hasText: 'Войти' });
    }
    
    async openPage() {
        await this.page.goto('https://dev.topklik.online/', { waitUntil: "load" });
    }

    async login(login, password) {
       
        await this.loginField.waitFor({ state: 'visible' });
        await this.loginField.fill(login);
        
        await this.passwordField.waitFor({ state: 'visible' });
        await this.passwordField.fill(password);
        
        await this.button.click();
    }
}

module.exports = { LoginPage };



