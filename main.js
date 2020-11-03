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