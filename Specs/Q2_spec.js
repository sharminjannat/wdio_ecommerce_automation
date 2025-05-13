const loginActions = require("../login/loginAction");
const username = "standard_user";
const password = "secret_sauce";
const commonTaskActions = require("../commonTask/commonTaskAction");
const Q2purchaseActions = require("../Q2purchase/Q2purchaseAction");
const firstname = "Sharmin";
const lastname = "Jannat";
const postalcode = "11435";


describe('Swag Labs website automation test suite', () => {
    it('login application for Q2', async () => {
        await loginActions.userNameInput(username);
        await browser.pause(2000);
        await loginActions.userPasswordInput(password);
        await browser.pause(2000);
        await loginActions.loginBtnSubmit();
        await browser.pause(5000);
        // after login a chrome browser pop-up coming, provide enough time to close that pop-up
    })

    it('purchase journey for Q2', async () => {
        await commonTaskActions.hamburgerMenuBtnSubmit();
        await browser.pause(2000);
        await commonTaskActions.resetBtnSubmit();
        await browser.pause(2000);
        await Q2purchaseActions.product1AddtoCart();
        await browser.pause(2000);
        await Q2purchaseActions.product2AddtoCart();
        await browser.pause(2000);
        await Q2purchaseActions.product3AddtoCart();
        await browser.pause(2000);
        await commonTaskActions.navigateToShoppingCart();
        await browser.pause(2000);
        await commonTaskActions.navigateToCheckOut();
        await browser.pause(2000);
        await commonTaskActions.firstNameInput(firstname);
        await browser.pause(2000);
        await commonTaskActions.lastNameInput(lastname);
        await browser.pause(2000);
        await commonTaskActions.postalCodeInput(postalcode);
        await browser.pause(2000);
        await commonTaskActions.navigateToContinueBtn();
        await browser.pause(2000);
        const productName1Elm = await $('(//div[@class="inventory_item_name"])[1]');
        await expect(productName1Elm).toHaveText('Sauce Labs Backpack');
        await browser.pause(2000);
        const productName2Elm = await $('(//div[@class="inventory_item_name"])[2]');
        await expect(productName2Elm).toHaveText('Sauce Labs Bike Light');
        await browser.pause(2000);
        const productName3Elm = await $('(//div[@class="inventory_item_name"])[3]');
        await expect(productName3Elm).toHaveText('Sauce Labs Bolt T-Shirt');
        await browser.pause(2000);
        const totalProductPriceElm = await $('//div[@class="summary_total_label"]');
        await expect(totalProductPriceElm).toHaveText('Total: $60.45');
        await browser.pause(2000);
        await commonTaskActions.navigateToFinishBtn();
        const verifySuccessfulOrderMsgElm = await $('//h2[@class="complete-header"]');
        await expect(verifySuccessfulOrderMsgElm).toHaveText(expect.stringContaining('Thank you for your order!'));
        await browser.pause(2000);
        await commonTaskActions.hamburgerMenuBtnSubmit();
        await browser.pause(2000);
        await commonTaskActions.resetBtnSubmit();
        await browser.pause(2000);
        await commonTaskActions.logoutBtnSubmit();
        await browser.pause(2000);





    })


})