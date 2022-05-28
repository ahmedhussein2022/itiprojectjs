

function plus()
{
    var numm=document.getElementById("insize");
    var vnum=numm.value++
    console.log(vnum);
    
}
function mince()
{
    var numm=document.getElementById("insize");
    if(numm.value>1)
   {
    var vnum=numm.value--
    console.log(vnum);
   }

}
function adddd()
{
 var asd=document.getElementById("nan").innerHTML="<div class='master'>"+
 "<div id='added-to-cart' class='cont' role='dialog' aria-modal='true' aria-labelledby='added-to-cart-title'>"+

 "</div>"+"<div class=inner' style='top:119px'>"+
    "<a href='#' onclick='closeCart()' id='closeCart' data-modal-close='' class='modal-close'> × </a><span id='closeMsg'>Added Successfully!</span>"+
   " <h4 id='added-to-cart-title'>"+
        "<svg fill='#000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>"+
            "<path d='M0 0h24v24H0z' fill='none'></path>"+
            "<path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'>"+                   
            "</path>"+
        "</svg>"+
       " Added to cart"+
    "</h4>"+

    "<div class='cart-product'>"+
        "<div class='cart-product__image'>"+
            "<img id = 'addToCartPopUpImage' width='100%' height='100%' src='https://cdn.shopify.com/s/files/1/0553/9148/6061/products/opio31-3-210724_300x.jpg?v=1645737247' alt='FLORAL CHIFFON DRESS - YELLOW - Opio Shop'>"+
        "</div>"+
        "<div class='cart-product__content'>"+
            "<p class='cart-product__content__title'>FLORAL CHIFFON DRESS - YELLOW </p>"+
            "<p class='cart-product__content__price'>"+
                "<del><span class='was-price theme-money' id ='addToCartPopUpPrice0'>599.00</span></del><br>"+ 
                "<span class='current-price theme-money' id='addToCartPopUpPrice'>299.00</span>"+
            "</p><p class='cart-product__content__meta'>Size: 10</p>"+
        "</div>"+
    "</div>"+
   " <p class='links'>"+
        "<a href='cart.html' class='buttonalt'>View cart</a>"+
        "<a href='checkout.html' class='button-checkout' [data-cc-checkout-button]=''>Checkout</a> "+
    "</p>"+
"</div>"+
"</div>"
}
  
// -----------------------------------------------set data in places--------------------

var proName = localStorage.getItem("productName");
var proPrice = localStorage.getItem("productPrice");
var proImage = localStorage.getItem("productImage");
var imagePlace = document.getElementsByClassName('image');
for(var i=0;i<imagePlace.length;i++){
    imagePlace[i].src = proImage;
}

document.getElementById('productItemName').innerHTML = proName;
document.getElementById('productItemPrice').innerHTML = proPrice+" L.E";
document.getElementById('addToCartBtn').addEventListener('click',function(){
    var oldPrice = Math.round(parseInt(proPrice)+parseInt(proPrice*.10));
    document.getElementById('addToCartPopUpPrice0').innerHTML = oldPrice+" L.E";
    document.getElementById('addToCartPopUpPrice').innerHTML = proPrice+" L.E";
    document.getElementById('addToCartPopUpImage').src = proImage;
});

function closeCart(){
    document.getElementById('nan').style.display='none';
}
document.getElementById('addToCartBtn').addEventListener('click',function(){
    document.getElementById('nan').style.display='block';
    var r = Math.round(Math.random()*10000);
    var p_Name = 'productName_'+r;
    var p_Price = 'productPrice_'+r;
    var p_Image = 'productImage_'+r;
    var P_Quantity = 'productQunatity_'+r;
    var quantity = document.getElementById('insize');
    console.log("***********************************insize "+quantity.value);
    if(getValue(proName)==-1){
    // var p_Name = 'productName'+r;
        sessionStorage.setItem(p_Name,proName);
        sessionStorage.setItem(p_Price,proPrice);
        sessionStorage.setItem(p_Image,proImage);
        sessionStorage.setItem(P_Quantity,quantity.value);
    }else{
        console.log(getValue(proName));
        console.log(proName);
        alert('The Product Already Exists In Card');
    }
    
    
});

function checKName(n){
    return sessionStorage.getItem(n);
}
console.log("Key of productPrice is:- ",getValue('320'))

//return key of passed value otherwise -1
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

