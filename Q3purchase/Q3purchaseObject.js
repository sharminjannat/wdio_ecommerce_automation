class Q3purchaseObjects{

    get sortContainerBtn() {
        return $('.product_sort_container');
    }

    get zaSortSelector() {
        return $('//option[@value="za"]');
    }

    get addtoCartFirstProduct(){
         return $('(//button[@class="btn btn_primary btn_small btn_inventory "])[1]');
     }

}





module.exports = new Q3purchaseObjects();