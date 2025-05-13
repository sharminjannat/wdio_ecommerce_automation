const loginActions = require("../login/loginAction");
const username = "locked_out_user";
const password = "secret_sauce";


describe('Swag Labs website login automation test suite', ()=>{
    it('login application for Q1', async()=>{
        await loginActions.userNameInput(username);
        await browser.pause(2000);
        await loginActions.userPasswordInput(password);
        await browser.pause(2000);
        await loginActions.loginBtnSubmit();
        await browser.pause(2000);
        const verifyErrorMsgElm = await $('//h3[@data-test="error"]');
        await expect(verifyErrorMsgElm).toHaveText(expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'));
        await browser.pause(2000);
        
    })
})