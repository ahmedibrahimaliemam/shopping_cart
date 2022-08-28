let user=document.getElementById("user") ;
let email=document.getElementById("email") ;
let password=document.getElementById("password") ;
let btn=document.getElementById("btn") ;
btn.onclick=function(e){
    e.preventDefault() ;
    if(user.value==""||email.value==""||password.value==""){
        alert("Please Fill Data") ;
    }
    else{
        localStorage.setItem("UserName",user.value) ;
        localStorage.setItem("email",email.value) ;
        localStorage.setItem("password",password.value) ;
        setTimeout( function(){
            window.location="login.html" ;
        },1500)
   
    
}
}