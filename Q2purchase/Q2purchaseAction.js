const Q2purchaseObjects = require("./Q2purchaseObject");

class Q2purchaseActions{
   

     async product1AddtoCart(){
        await Q2purchaseObjects.addtoCartProduct1.click();
     }

     async product2AddtoCart(){
        await Q2purchaseObjects.addtoCartProduct2.click();
     }

     async product3AddtoCart(){
        await Q2purchaseObjects.addtoCartProduct3.click();
     }

   

     


}

module.exports = new Q2purchaseActions();