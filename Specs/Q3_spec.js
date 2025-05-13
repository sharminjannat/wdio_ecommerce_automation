const loginActions = require("../login/loginAction");
const username = "performance_glitch_user";
const password = "secret_sauce";
const commonTaskActions = require("../commonTask/commonTaskAction");
const firstname = "Sharmin";
const lastname = "Jannat";
const postalcode = "11435";
const Q3purchaseActions = require("../Q3purchase/Q3purchaseAction");

describe('Swag Labs website automation test suite', () => {
    it('login application for Q3', async () => {
        await loginActions.userNameInput(username);
        await browser.pause(2000);
        await loginActions.userPasswordInput(password);
        await browser.pause(2000);
        await loginActions.loginBtnSubmit();
        await browser.pause(5000);
        // after login a chrome browser pop-up coming, provide enough time to close that pop-up


    })

    it('purchase journey for Q3', async () => {
        await commonTaskActions.hamburgerMenuBtnSubmit();
        await browser.pause(2000);
        await commonTaskActions.resetBtnSubmit();
        await browser.pause(2000);
        await Q3purchaseActions.navigateToSortContainerBtn();
        await browser.pause(2000);
        await Q3purchaseActions.navigateToZaSortSelector();
        await browser.pause(2000);
        await Q3purchaseActions.firstProductAddtoCart();
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
        const firstProductNameElm = await $('//div[@class="inventory_item_name"]');
        await expect(firstProductNameElm).toHaveText('Test.allTheThings() T-Shirt (Red)');
        await browser.pause(2000);
        const firstProductTotalPriceElm = await $('//div[@class="summary_total_label"]');
        await expect(firstProductTotalPriceElm).toHaveText('Total: $17.27');
        await browser.pause(2000);
        await commonTaskActions.navigateToFinishBtn();
        await browser.pause(2000);
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