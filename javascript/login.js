function register()
{
    var useremail=document.getElementById("emailinput").value;
    var userpassword=document.getElementById("passinput").value;
    var fname=document.getElementById("textinput1").value;
    var lname=document.getElementById("textinput2").value;
    localStorage.setItem('email',useremail);
    localStorage.setItem('password',userpassword);
    localStorage.setItem('firstName',fname);
    localStorage.setItem('lastName',lname);
    // var getemail=localStorage.getItem("email"); 
    // alert("complete registration");
    window.location.assign = "index.html";
} 
function registercheck()
{
    var login_useremail=document.getElementById("idemail").value;
    var login_userpassword=document.getElementById("idpassword").value;
    register_useremail=localStorage.getItem('email');
    register_userpassword=localStorage.getItem('password');
    if(login_useremail==register_useremail &&login_userpassword==register_userpassword)
    {
        // alert("complete login");
        // window.location.assign = "index.html";
        return 1;
    }
    else{
        return -1;
    }
    return -1;
}


//email validate
var emailinput=document.getElementById("idemail");
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

var pass=document.getElementById("idpassword");
var patternForPaswword=/[a-zA-Z0-9]{8,}/g;
pass.addEventListener("blur",function(){
    if(patternForPaswword.test(pass.value)==true){
    
            document.getElementById("div4").innerHTML=null;
    }
    else{
        document.getElementById("div4").innerHTML="<span>password length should be more than 7</span>";
    }
})
///////////////////////////////////////////////////
 