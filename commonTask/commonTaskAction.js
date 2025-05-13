const commonTaskObjects = require("./commonTaskObj");

class CommonTaskActions {
    async hamburgerMenuBtnSubmit() {
        await commonTaskObjects.hamburgerMenuButton.click();
    }

    async resetBtnSubmit() {
        await commonTaskObjects.resetButton.click();
    }

    async navigateToShoppingCart() {
        await commonTaskObjects.shoppingCart.click();
    }

    async navigateToCheckOut() {
        await commonTaskObjects.checkOut.click();
    }

    async firstNameInput(firstname) {
        await commonTaskObjects.inputFirstName.setValue(firstname);
    }

    async lastNameInput(lastname) {
        await commonTaskObjects.inputLastName.setValue(lastname);
    }

    async postalCodeInput(postalcode) {
        await commonTaskObjects.inputPostalCode.setValue(postalcode);
    }

    async navigateToContinueBtn() {
        await commonTaskObjects.continueBtn.click();
    }

    async navigateToFinishBtn() {
        await commonTaskObjects.finishBtn.click();
    }

    async logoutBtnSubmit() {
        await commonTaskObjects.logoutBtn.click();
    }

    

}



module.exports = new CommonTaskActions();