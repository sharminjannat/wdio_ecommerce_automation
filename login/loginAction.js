const loginObjects = require("./loginObject");

class loginActions{
    async userNameInput(username){
        await loginObjects.inputUserName.setValue(username);        
    }
    async userPasswordInput(password) {
        await loginObjects.inputPassword.setValue(password);
    }
    async loginBtnSubmit() {
        await loginObjects.loginButton.click();
    }

}


module.exports = new loginActions();