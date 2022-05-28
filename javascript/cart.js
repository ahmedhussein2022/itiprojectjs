console.log("CheckOut ______________________________________");
var productNameList = [];
var productPriceList = [];
var productImageList = [];
var productQuantityList = [];
var productTotalPriceList = [];
//call this function to  get product session info
getCartInfo();
//productName_productPrice_productImage_productQunatity_
function getCartInfo(){
    let storage = [];
    Object.keys(sessionStorage).forEach((key) => {
        storage[storage.length] = key;
    });
         productNameList = [];
         productPriceList = [];
         productImageList = [];
         productQuantityList = [];
         productTotalPriceList = [];
    for(var i =0 ;i<storage.length;i++){
        console.log("Plit key :  "+splitKey(storage[i]));
        if(splitKey(storage[i])!=-1){
            console.log("________start_______");
            console.log(" key :  "+storage[i]);
            console.log("_______end________");
            setProductInLists(splitKey(storage[i]));
        }
    }
}
//save product info in the lists
function setProductInLists(signifierNo){
    
    var n = 'productName_'+signifierNo;
    var p = 'productPrice_'+signifierNo;
    var i = 'productImage_'+signifierNo;
    var q = 'productQunatity_'+signifierNo;

    var name = sessionStorage.getItem(n);
    var price = sessionStorage.getItem(p);
    var image = sessionStorage.getItem(i);
    var quantity = sessionStorage.getItem(q);

    // console.log('inside setProductInList Fun : name '+name);
    // console.log('inside setProductInList Fun : price '+price);
    // console.log('inside setProductInList Fun : image '+image);
    // console.log('inside setProductInList Fun : quantity '+quantity);
    productNameList[productNameList.length] = name;
    productPriceList[productNameList.length] = price;
    productImageList[productNameList.length]  = image;
    productQuantityList[productNameList.length]  = quantity;
    productTotalPriceList[productNameList.length] = parseInt(price)*parseInt(quantity);
}
//test
console.log(productNameList);
console.log(productPriceList);
console.log(productImageList);
console.log(productQuantityList);
//here split key to get other keys
console.log(splitKey("asd_135")); //135
function splitKey(key){
    var n = key.split('_');
    if(n.length==2 && n[0]=='productName'){
        return n[1];
    }
    return -1;
}

/**
cartItem-cartProductTotalPrice-cartProductQuntity
-cartProductPrice-colimgg-cartProductName-removeItemFromCart() 

 */

for(var i=0 ;i < 20;i++){
    document.getElementsByClassName('cartItem')[i].style.display = 'none';
  }
  console.log("***************************Length productNameList : "+productNameList.length);
  for(var i=1 ;i < productNameList.length;i++){
    document.getElementsByClassName('cartItem')[i].style.display = 'block';
}
  for(var i=0 ;i < productNameList.length;i++){

    // console.log("++++++++++++++++++++++++++++++");
    // console.log(productNameList[i+1])
    // console.log(productPriceList[i+1])
    // console.log(productImageList[i+1])
    // console.log(productQuantityList[i+1])
    // console.log(productTotalPriceList[i+1])
    // console.log("++++++++++++++++++++++++++++++");
      if(i==0)
        continue;
      document.getElementsByClassName('cartProductName')[i].innerHTML=productNameList[i];
      document.getElementsByClassName('cartProductQuntity')[i].value=productQuantityList[i];
      document.getElementsByClassName('colimgg')[i].src=productImageList[i];
      document.getElementsByClassName('cartProductPrice')[i].innerHTML=productPriceList[i]+" L.E";
      document.getElementsByClassName('cartProductTotalPrice')[i].innerHTML=productTotalPriceList[i]+" L.E";
      document.getElementsByClassName('hidden')[i].value=productNameList[i];
  }
  
  function removeItemFromCart(){
      window.onclick= function(e){
        var targetProductName = e.target.nextElementSibling.value;
        console.log("**********************remove"+targetProductName);
        var signifierNo = splitKey(getValue(targetProductName));
        var n = 'productName_'+signifierNo;
        var p = 'productPrice_'+signifierNo;
        var i = 'productImage_'+signifierNo;
        var q = 'productQunatity_'+signifierNo;
        sessionStorage.removeItem(n);
        sessionStorage.removeItem(p);
        sessionStorage.removeItem(i);
        sessionStorage.removeItem(q);
      }
      getCartInfo();
      location.reload();
  }

  function getValue(val){
    let storage = []
    Object.keys(sessionStorage).forEach((key) => {
        storage[storage.length] = key;
    });
    for(var i =0 ;i<storage.length;i++){
        if(sessionStorage.getItem(storage[i])==val){
            return storage[i];
        }
    }
    return -1;
}
function getSubTotal(){
    var sum=0;
    for(var i=0;i<productTotalPriceList.length;i++){
        if(i==productTotalPriceList.length-1||i==0)
        continue;
        sum+=parseInt(productTotalPriceList[i]);
    }
    if(sum>0){
    return sum;
    }else{
        return -1;
    }
}
document.getElementById('subTotalPrice').innerHTML = getSubTotal()==-1?0:getSubTotal()+' L.E';

