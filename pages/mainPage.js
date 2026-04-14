class MainPage {
    constructor(page) {
        this.page = page;
        this.logoNameDisplayedIfSuccessfullyLoggedIn = page.locator('text=Калькулятор столешниц');
        this.toggle = page.locator('[data-testid="hide-countertop"]');
        this.tabletopNotDisplayed = page.locator('[data-testid="show-main"]');
        this.ushapedTabletop = page.locator('[data-testid="countertop-type-u"]');
        this.imageofUshapedTabletop = page.locator('[data-testid="size-control"]').nth(3);
        this.thickness = page.locator('[data-testid="select-thickness"]').first();
        this.choiceThickness = page.locator('.styles_option__wjG5E');
        this.baseboard = page.locator('[data-testid="top-button"]').last();
        this.islans = page.locator('[data-testid="product-item"]').first();
        this.waterDrain = page.locator('[data-testid="options-item"]').nth(2);
        this.searchColor = page.locator('[data-testid="search"]');
        this.clickCalculate = page.locator('[data-testid="calc-button"]').last();
        this.report = page.locator('[data-testid="open-report-button"]');

    }
    
    async toggleOff() {
       
        await this.toggle.waitFor({ state: 'visible' });
        await this.toggle.click();
    }

       async ushapedTabletopVisible() {
       
        await this.ushapedTabletop.waitFor({ state: 'visible' });
        await this.ushapedTabletop.click();
    }

    async changeThickness() {
       
        await this.thickness.waitFor({ state: 'visible' });
        await this.thickness.click();
        await this.choiceThickness.waitFor({ state: 'visible' });
        await this.choiceThickness.click();
    }

    async removeBaseboardFromOrder() {
       
        await this.baseboard.waitFor({ state: 'visible' });
        await this.baseboard.click();
    }
 

      async addIslandToOrder() {
       
        await this.islans.waitFor({ state: 'visible' });
        await this.islans.click();
    }

      async addWaterDrainToOrder() {
       
        await this.waterDrain.waitFor({ state: 'visible' });
        await this.waterDrain.click();
    }


      async chooseColorOfCountertop(color) {
       
        await this.searchColor.waitFor({ state: 'visible' });
        await this.searchColor.fill(color);
    }



     async calculateOrder() {
       
        await this.clickCalculate.waitFor({ state: 'visible' });
        await this.clickCalculate.click();
    }


     async openReport() {
       
        await this.report.waitFor({ state: 'visible' });
        await this.report.click();
    }
}

module.exports = { MainPage };

