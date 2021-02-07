var empty_message = "The field is empty, type in your password";
var textbox = document.getElementById("password");
var button = document.getElementById("check");
var info = document.getElementById("info");
var lengthItem = document.getElementById("passLength");
var lowerItem = document.getElementById("passLower");
var upperItem = document.getElementById("passUpper");
var numberItem = document.getElementById("passNumber");
var specialItem = document.getElementById("passSpecial");
var results = document.getElementById("results");

button.addEventListener("click", function(){
    var password = textbox.value;
    if(password != ""){
        var passwordLength = password.length;
        if(passwordLength>=10){
            lengthItem.className = "text-success";
        }
        else{
            lengthItem.className = "text-danger";
        }
        if(/[a-z]/.test(password) == true){
            lowerItem.className = "text-success";
        }
        else{
            lowerItem.className = "text-danger";
        }
        if(/[A-Z]/.test(password) == true){
            upperItem.className = "text-success";
        }
        else{
            upperItem.className = "text-danger";
        }
        if(/[0-9]/.test(password) == true){
            numberItem.className = "text-success";
        }
        else{
            numberItem.className = "text-danger";
        }
        info.innerHTML = "<strong>Info!</strong> Check the results below";
        results.className = "text-center pb-2";
        password.value = "";
    }
    else {
        alert(empty_message);
    }
})
