import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { MainPage } from '../pages/mainPage.js';
import { ReportPage } from '../pages/reportPage.js';


test.describe("UI тесты на b2b решение topklik", () => {
  
  let loginPage;
  let mainPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
    
    const login = "tester@inzhenerka.tech";
    const password = "LetsTest!";
    
    await loginPage.openPage();
    await loginPage.login(login, password);

  });



test('Успешная авторизация', async ({ page }) => {
    await expect(mainPage.logoNameDisplayedIfSuccessfullyLoggedIn).toBeVisible();
  });
    

test('Переключатель "Скрыть столешницу" работает', async ({ page }) => {
    await mainPage.toggleOff();
    await expect(mainPage.tabletopNotDisplayed).toBeVisible();
});

test('Переключение на П-образную столешницу', async ({ page }) => {
    await mainPage.ushapedTabletopVisible();
    await expect(mainPage.imageofUshapedTabletop).toBeVisible();
});


test('Собрать заказ', async ({ page, context }) => {
    const color = "S103 CONCRETE GREY";

    await mainPage.ushapedTabletopVisible();
    await mainPage.changeThickness();
    await mainPage.removeBaseboardFromOrder();
    await mainPage.addIslandToOrder();
    await mainPage.addWaterDrainToOrder();
    await mainPage.chooseColorOfCountertop(color);
    await mainPage.calculateOrder();
    
    const pagePromise = context.waitForEvent('page'); 
    await mainPage.openReport(); 
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    
    const reportPage = new ReportPage(newPage);
    
    await reportPage.verifyReportPage();
    await reportPage.verifyColor();
    await reportPage.verifyType();
    await reportPage.havePlacesForWaterDrainage();
    await reportPage.cheakTotalPrice();
});
})




