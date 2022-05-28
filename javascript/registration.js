
var inputtext=document.querySelector("input[id='textinput1']")
var pattern = /[a-zA-Z]{3,}/;
    inputtext.addEventListener("blur",function(){  
    var valid  = pattern.test(inputtext.value);  
    if(valid!=true){
        document.getElementById("div1").innerHTML ="<span>Invalid Name</span>";
       
    }
    else{
          document.getElementById("div1").innerHTML = null; 
    }
})

var inputtext2=document.querySelector("input[id='textinput2']")
//var pattern = /[a-zA-Z]{3,}/;
inputtext2.addEventListener("blur",function(){
    var valid2=pattern.test(inputtext2.value);
    if(valid2!=true)
    {
        document.getElementById("div2").innerHTML="<span>Invalid Name</span>";
    }
    else{
        document.getElementById("div2").innerHTML=null;
    }
})

//          about email
var emailinput=document.getElementById("emailinput");
emailinput.addEventListener('blur',function(){
//asd@yahoo.com.eg
var pattern = /^([a-z-\/_.(0-9)]{3,}@[a-z]{2,}.(com|edu|net|org))$/;
var testt = pattern.test(emailinput.value);
if(testt!=true){
    document.getElementById("div3").innerHTML="<span>Invalid Email</span>";
}
else{
    document.getElementById("div3").innerHTML=null
}
})
            /// about password

var pass=document.getElementById("passinput");
var reppass=document.getElementById("repassinput");
var patternForPaswword=/[a-zA-Z 0-9]{8,}/g;
pass.addEventListener("blur",function(){
    if(patternForPaswword.test(pass.value)==true){
    
            document.getElementById("div4").innerHTML=null;
    }
    else{
        document.getElementById("div4").innerHTML="<span>password length should be more than 7</span>";
    }
})
reppass.addEventListener("blur",function(){
    if(pass.value==reppass.value){
        document.getElementById("div5").innerHTML=null;
    }
    else{
        document.getElementById("div5").innerHTML="<span>Passwords Are Not The Same</span>";
    }
})

// 
document.getElementById('createAccount').addEventListener('click',function(e){
    if(localStorage.getItem('firstName')==false){
        e.preventDefault();
    }
});

document.getElementById('loginBTN').addEventListener('click',function(e){
    if(registercheck()== -1){
        e.preventDefault();
    }
});


// function haveacount(){
//     var 
// }
