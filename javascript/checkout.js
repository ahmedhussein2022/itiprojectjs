console.log("CheckOut ______________________________________");
var productNameList = [];
var productPriceList = [];
var productImageList = [];
var productQuantityList = [];
// window.onload = 
//productName_productPrice_productImage_productQunatity_
function getCartInfo(){
    let storage = [];
    Object.keys(sessionStorage).forEach((key) => {
        storage[storage.length] = key;
    });
    for(var i =0 ;i<storage.length;i++){
        if(sessionStorage.getItem(storage[i])==val){
             storage[i];
        }
    }
}
//here split key to get other keys
console.log(splitKey("asd_135"));
function splitKey(key){
    var n = key.split('_');
    return n[1];
}
function getValue(val){
    let storage = []
    Object.keys(sessionStorage).forEach((key) => {
        storage[storage.length] = key;
    });
    for(var i =0 ;i<storage.length;i++){
        if(sessionStorage.getItem(storage[i])==val){
            return storage[i];
            console.log("________keys inside if stmt : ________________"+storage[i]);
        }
    }
    return -1;
}
