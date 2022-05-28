// set page name on the logo
document.getElementById('pageLogo').innerHTML = "Clothes For Kids";

//---------------------------- lists for holding data--------------
var productImages = [
    '../images/group02/kid01.png',
    '../images/group02/kid02.png',
    '../images/group02/kid03.png',
    '../images/group02/kid04.png',
    '../images/group02/kid05.png',
    '../images/group02/kid06.png',
    '../images/group02/kid07.png',
    '../images/group02/kid08.png',
    '../images/group02/kid09.png',
    '../images/group02/kid10.png',
    ];
var productName = [
    'FRILL TIER KNITTED PLAYSUIT',
    'CHERRY BLOSSOM PLAYSUIT',
    'KNITTED FRONT POCKET ROMPER - BLACK',
    'KNITTED FRONT POCKET ROMPER - BLUSH',
    'KNITTED FRONT POCKET ROMPER - GREEN',
    'POLKA DOTS BLOUSE',
    'FLOUNCE TRIMMED SHIRT',
    'EMBROIDERED COTTON JERSEY DRESS - WHITE',
    'EMBROIDERED COTTON JERSEY DRESS - BLUSH',
    'LONG SLEEVE TOP - LILAC',
    ];
var productPrice = [
    370,
    280,
    410,
    199,
    290,
    230,
    320,
    310,
    250,
    310,
]; 

// -------------------filling the data in corresponding places-------------------------
//*********************** */ when strart as default or when refresh the page ----------------------

//hide 32 product item
for(var i = 0 ;i<32; i++){
    document.getElementsByClassName('productItemMultiCategories')[i].style.display = 'none';
   }
//get random 32 product from all categories
var randomList = [];

for(var i = 0 ;i<productName.length; i++){
    // randomList[randomList.length] = productName.indexOf(copylist[i]);
    randomList[randomList.length] = i;
    // console.log("**************************"+randomList[i]+"__"+test.indexOf(copylist[i]));
    // console.log("Name:  "+productName[randomList[i]]+" - Price :  "+productPrice[randomList[i]]+" - Image : "+productImages[randomList[i]])
}
   //display product item  = list.lenght
   for(var i = 0 ;i<randomList.length; i++){
    document.getElementsByClassName('productItemMultiCategories')[i].style.display = 'block';
   }
// display products in randomList
for(var i = 0 ;i<randomList.length ;i++){
    document.getElementsByClassName('imageByCats')[i].src = productImages[randomList[i]];
    document.getElementsByClassName('productNameByCats')[i].innerHTML =productName[randomList[i]];
    document.getElementsByClassName('priceByCats')[i].innerHTML = productPrice[randomList[i]]+" L.E";
}




//getProductInfo
function getProductInfo(){
    window.onclick=function(e){
        var currentProductName='';
        if(e.target.hasAttribute('src')){
            currentProductName=e.target.parentElement.nextElementSibling.innerHTML;
        }else if(e.target.getAttribute('class')=='priceByCats'){
            currentProductName=e.target.previousElementSibling.innerHTML;
        }else{
            currentProductName=e.target.innerHTML;
        }
        console.log(currentProductName);
        var index = productName.indexOf(currentProductName);
        console.log(index);
        //set values in session of current clicked element
        localStorage.setItem("productName",productName[index]);
        localStorage.setItem("productPrice",productPrice[index]);
        localStorage.setItem("productImage",productImages[index]);
    }
}

// shuffle function
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  