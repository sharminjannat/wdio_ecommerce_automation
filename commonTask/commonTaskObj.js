class CommonTaskObjects {
    get hamburgerMenuButton() {
        return $('.bm-burger-button');
    }

    get resetButton() {
        return $('#reset_sidebar_link');
    }

    get shoppingCart(){
        return $('.shopping_cart_link');
    }

    get checkOut(){
        return $('#checkout');
    }

    get inputFirstName(){
        return $('#first-name');
     }

     get inputLastName(){
        return $('#last-name');
     }

     get inputPostalCode(){
        return $('#postal-code');
     }

     get continueBtn(){
        return $('#continue');
     }

     get finishBtn(){
        return $('#finish');
     }

     get logoutBtn() {
        return $('#logout_sidebar_link');
    }

    

}

module.exports = new CommonTaskObjects();