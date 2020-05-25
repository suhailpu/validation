let email=document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if (email.value.trim()==""||pwd.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
       return true;
    }
}