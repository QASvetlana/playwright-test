const { expect } = require('@playwright/test');

class ReportPage {
    constructor(page) {
        this.page = page;
        this.color = this.page.getByText('acryl:HiMacs:S103 CONCRETE GREY');
        this.title = this.page.getByRole('heading', { name: 'Результаты расчета' });
        this.type = this.page.getByText('П-образная');
        this.placesForwater = this.page.locator('td.col-2:has-text("Проточки для стока воды")');
        this.price = this.page.locator('td.col-5').last();
    }
    
    async verifyReportPage() {
        await this.title.waitFor({ state: 'visible' });
        await expect(this.title).toBeVisible();
    }
    
    async verifyColor() {
        await this.color.waitFor({ state: 'visible' });
        await expect(this.color).toBeVisible();
    }

       async verifyType() {
        await this.type.waitFor({ state: 'visible' });
        await expect(this.type).toBeVisible();
    }

        async havePlacesForWaterDrainage() {
        await this.placesForwater.scrollIntoViewIfNeeded(); 
        await this.placesForwater.waitFor({ state: 'visible' });
        await expect(this.placesForwater).toBeVisible();
    }

    async cheakTotalPrice() {
        await this.price.scrollIntoViewIfNeeded(); 
        await this.price.waitFor({ state: 'visible' });
        const priceText = await this.price.textContent();
        console.log('Цена в отчете:', priceText);
        expect(priceText).not.toBeNull();
        expect(priceText).not.toBe('');
        await expect(this.price).toBeVisible();
    }
}

module.exports = { ReportPage };

