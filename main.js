/////// NAME FORM ////////////

function verifLet(le){
    letters=/[A-Za-z]/;
    if(letters.test(le)){
        return true;
    }
    else{
        return false;
    }
}

var nom=document.getElementById("name");
var errNom=document.getElementById("error-name");

nom.addEventListener("focus",lReset);
nom.addEventListener("blur",checkLet);


function checkLet(){
    var spaceCheck=false;
    var letterC=true;
    if(nom.value.length<6){
        errNom.innerHTML="You most enter al least 6 letters";
    }
    else{
        if(verifLet(nom.value[0]) && verifLet(nom.value[nom.value.length-1])){
            for(var i=1;i<nom.value.length-1;i++){
                if(!verifLet(nom.value[i])){
                    if(nom.value[i]==" " && nom.value[i-1]!=" "){
                        spaceCheck=true;
                    }
                    else{
                        letterC=false;
                    }
                }
            }
        }
        if(!spaceCheck || !letterC){
            errNom.innerHTML="Please, enter first and last name";
        }
    }
}
function lReset(){
    errNom.innerHTML="";
}

//// EMAIL FORM ////

var mail=document.getElementById("email");
var errMail=document.getElementById("error-mail");

mail.addEventListener("focus",resetEmail);
mail.addEventListener("blur",checkEmail);

function checkEmail(){
    if(mail.value.length<8){
        errMail.innerHTML="At least 8 characters long";
    }
    else{
        emailEReg= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailEReg.test(mail.value)) {
            errMail.innerHTML="Please, enter a valid email";
        }
    }
}
function resetEmail(){
    errMail.innerHTML="";
}

////// PASSWORD FORM //////

var pass=document.getElementById("pass");
var errPass=document.getElementById("error-pass");

pass.addEventListener("focus",resetPwd);
pass.addEventListener("blur",checkPw);

function checkPw(){
    if(pass.value.length<8){
        errPass.innerHTML="At least 8 characters long";
    }
    else{
        patron = /[A-Za-z0-9]/;
        for (var i=0; i<pass.value.length;i++){
            if(!patron.test(pass.value[i])){
                errPass.innerHTML="The password must have letters and numbers";
                break;
            }
        }

    }
}
function resetPwd(){
    errPass.innerHTML="";
}

////// REPEAT PASSWORD //////

var repPass= document.getElementById("rep-passwd");
var errRepPass=document.getElementById("error-rPass");

repPass.addEventListener("focus",resetRP);
repPass.addEventListener("blur",checkRP);

function checkRP(){
    if(pass.value!=repPass.value || repPass.value.length==0 ){
        errRepPass.innerHTML="Passwords don't match";
    }
}

function resetRP(){
    errRepPass.innerHTML="";
}

////// AGE FORM //////

function correctNum(num){
    if(num=="0" ||num=="1" ||num =="2" ||
    num=="3" ||num=="4" ||num=="5" ||
    num=="6" ||num=="7" ||num=="8" ||num=="9"){
        return true;
    }
    else{
        return false;
    }
}
var age=document.getElementById("age");
var errAge=document.getElementById("error-age");

age.addEventListener("focus",resetAge);
age.addEventListener("blur",CheckAge);

function CheckAge(){
    var ageTxt=true;
    if(age.value.length<=2 && age.value.length>0){
        for(var i=0;i<age.value.length;i++){
            if(!correctNum(age.value[i])){
                ageTxt=false;
                break;
            }
        }
        if (ageTxt){
            if(age.value<18 ){
                errAge.innerHTML="Yo must be older than 18";
            }
        }else{
            errAge.innerHTML="Something go wrong";
        }
    }else{
        errAge.innerHTML="Something go wrong";
    }
}

function resetAge(){
    errAge.innerHTML="";
}

/////// Phone number Form //////

var tel=document.getElementById("phone");
var errorPh=document.getElementById("error-phone");

tel.addEventListener("focus",resetPh);
tel.addEventListener("blur",checkPh);

function checkPh(){
    var phoneTxt = false;
    if(tel.value.length<7){
        errorPh.innerHTML="at least 7 digits";
    }else{
        for(var i=0;i<tel.value.length;i++){
            if(tel.value[i]=="-" || tel.value[i]==" "|| tel.value[i]== "_" ||tel.value[i]=="(" ||tel.value[i]==")"){
                phoneTxt=true;
                break;}
            else if(!correctNum(tel.value[i])){
                    phoneTxt=true;
                    break;
                }
        }
        if (phoneTxt){
            errorPh.innerHTML="Only numbers";
        }
    }
}
function resetPh(){
    errorPh.innerHTML="";
}

////// Adress form //////

var dir=document.getElementById("adress");
var errDir=document.getElementById("error-adress");

dir.addEventListener("focus",resetAdress);
dir.addEventListener("blur",CheckAdress);

function CheckAdress(){
    var adresTxt= false;
    if(dir.value.length<5){
        errDir.innerHTML="At least 6 characters";
    }
    for(var i=1;i<dir.value.length-1;i++){
        if(dir.value[i]==" "){
            adresTxt= true;
        }
    }
    //if(!adresTxt){
       //errNom.innerHTML="Something went wrong";
    //}
}
function resetAdress(){
    errDir.innerHTML="";
}

////// City Form ///////

var city=document.getElementById("city");
var errCity=document.getElementById("error-city");

city.addEventListener("focus",resetCity);
city.addEventListener("blur",checkCity);

function checkCity(){
    if(city.value.length<3){
        errCity.innerHTML="At least 3 characters";
    }
}
function resetCity(){
    errCity.innerHTML="";
}

////// Zip Code form //////

var code=document.getElementById("zipCode");
var errCod=document.getElementById("error-zipCode");

code.addEventListener("focus",resetZC);
code.addEventListener("blur",checkZC);

function checkZC(){
    if(code.value.length<4){
        errCod.innerHTML="at least 4 digits";
    }
}
function resetZC(){
    errCod.innerHTML="";
}

////// ID Form //////

var idD=document.getElementById("idDocument");
var errIdD=document.getElementById("error-idDocument");

idD.addEventListener("focus",resetIoc);
idD.addEventListener("blur",checkIoc);

function checkIoc(){
    if(idD.value.length<7 || idD.value.length>8){
        errIdD.innerHTML="The ID must be between 7 and 8 digits";
    }
    else{
        for (var i=0; i<idD.value.length;i++){
            if(!correctNum(idD.value[i])){
                errIdD.innerHTML="Please, enter only numbers";
                break;
            }
        }
    }
}
function resetIoc(){
    errIdD.innerHTML="";
}