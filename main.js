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

