const Q3purchaseObjects = require("./Q3purchaseObject");

class Q3purchaseActions {

    async navigateToSortContainerBtn() {
        await Q3purchaseObjects.sortContainerBtn.click();
    }

    async navigateToZaSortSelector() {
        await Q3purchaseObjects.zaSortSelector.click();
    }

    async firstProductAddtoCart(){
            await Q3purchaseObjects.addtoCartFirstProduct.click();
         }

}



module.exports = new Q3purchaseActions();