var firstName= document.forms["regForm"]["fname"];
var lastName=document.forms["regForm"]["lname"];
var dob = document.forms["regForm"]["dob"];
var email = document.forms["regForm"]["email"];
var password = document.forms["regForm"]["psw"];
var cPassword = document.forms["regForm"]["cpsw"];
function validate(){
    if (firstName.value==""){
        firstName.focus();
        document.getElementById("p1").innerHTML="mandatory field.";
        return false;
    }
    else{
        document.getElementById("p1").innerHTML="";
    }

    if (lastName.value==""){
        lastName.focus();
        document.getElementById("p2").innerHTML="mandatory field.";
        return false;
    }
    else{

        document.getElementById("p2").innerHTML="";
    }

    if (dob.value==""){
        dob.focus();
        document.getElementById("p3").innerHTML="mandatory field.";
        return false;
    }
    else{

        document.getElementById("p3").innerHTML="";
    }

    if (email.value==""){
        email.focus();
        document.getElementById("p4").innerHTML="mandatory field.";
        return false;
    }
    else{

        document.getElementById("p4").innerHTML="";
    }

    if (password.value==""){
        password.focus();
        document.getElementById("p5").innerHTML="mandatory field.";
        return false;
    }
    else{

        document.getElementById("p5").innerHTML="";
    }

    if (cPassword.value==""){
        cPassword.focus();
        document.getElementById("p6").innerHTML="mandatory field.";
        return false;
    }
    else{
        document.getElementById("p6").innerHTML="";
    }
    if(password.value!=cPassword.value){
        document.getElementById("p6").innerHTML="not match";
        return false;
    }
    else{
        document.getElementById("p6").innerHTML="";
    }
}

