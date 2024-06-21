var userName =document.querySelector('#userName')
var userEmail =document.querySelector('#userEmail')
var userPassword =document.querySelector('#userPassword')
var signup =document.querySelector('#signup')
var loginEmail=document.querySelector('#email')
var loginPassword=document.querySelector('#password')
var login =document.querySelector('#login')
var home=document.querySelector('#home')
var Welcome= document.querySelector('#Welcome')
var messageError =document.querySelector('#messageError')
var messageSuccess =document.querySelector('#messageSuccess')
var messageErroAlready =document.querySelector('#messageErroAlready')
var messageRequired =document.querySelector('#messageRequired')
var messageErrRequired =document.querySelector('#messageErrRequired')



var userData=[]
if(JSON.parse(localStorage.getItem('users'))!=null){
 userData=JSON.parse(localStorage.getItem('users'))
}

//=================sigup==================
signup?.addEventListener('click',function(){
    verifyingData()
   })
 
   

function verifyingData(){
   
    if(userName.value == '' || userEmail.value == '' || userPassword.value == '' ){
      messageRequired.classList.replace("d-none","d-flex")
    
    }else{
        for( var i=0; i<userData.length;i++){
            if( userData[i].Email.toLowerCase() == userEmail.value.toLowerCase() ){
             messageErroAlready.classList.replace("d-none","d-flex")
               return false ;
            }
        
        }
            users()
            messageSuccess.classList.replace("d-none","d-flex")
    
        }}
    

    

function users(){
    var datasObj = {
    Name:userName.value,
    Email:userEmail.value,
    Password:userPassword.value
}
userData.push(datasObj)
localStorage.setItem('users',JSON.stringify(userData))


} 



function  clearinput(){
    userName.value= null
    userEmail.value= null
    userPassword.value= null
}
    


//=========================login=======================

login?.addEventListener('click',function(){
    checkData()
})




function checkData(){    
  
   
   if(loginEmail.value == '' ||loginPassword.value == '' ){
            messageErrRequired.classList.replace("d-none","d-flex")
        }
        else{
            for(var i=0;i<userData.length;i++){
                if(loginEmail.value.toLowerCase() == userData[i].Email.toLowerCase()  &&  loginPassword.value == userData[i].Password ){
                    window.location.href="index-home.html";
                    localStorage.setItem('userName',JSON.stringify(userData[i].Name))
                    return
                }
               }
            messageError.classList.replace("d-none","d-flex")
        }
}

var mass=JSON.parse( localStorage.getItem('userName'))
Welcome.innerHTML= 'Welcome'+' '+ mass