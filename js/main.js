// code to display whether a user is online or not
var statusInterval = setInterval(function () {
    if(navigator.onLine) {
    document.getElementById("demo").innerHTML = "Online!😊";
}else {
    document.getElementById("demo").innerHTML = "You're Offline!😴"
}
}, 2000);



// code to validate password
function validate() {
    var p = document.getElementById("password").value;
    var c = document.getElementById("c-password").value;
    
    if(c === p && p !== "") {
        document.getElementById("para").innerHTML = "Password matches!";
    }
    
    else if(p || c === ""){
          document.getElementById("para").innerHTML = "Password doesn't match!";
    }
    else{
 document.getElementById("para").innerHTML = "Password doesn't match!";
    }
}


//code for popup modal
function toggle() {

var body = document.getElementById("body");
var fullname = document.getElementById("fullname").value;

var username = document.getElementById("username").value;

var email = document.getElementById("email").value;

var phone = document.getElementById("phone").value;

var password = document.getElementById("password").value;

var cpassword = document.getElementById("c-password").value;

if(fullname&& username&& email&& phone&& cpassword !== "" && cpassword === password) {

// code to delay modal display for 1sec
var myTimeout = setTimeout(function() {
         
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    
    var popup = document.getElementById("popup");
    popup.classList.toggle('active');
    
    }, 2000);
    
    
    setTimeout(// code to submit form
function submitForm() {   
document.getElementById("myForm").submit(); 
window.location.href = 'signup-successful.html';
     }, 10000); // set timeout 
    
    
// code to disable submit botton while showing spinner
document.getElementById("s-btn").disabled = true;

// code to disable page scroll on modal out
body.style.overflow = "hidden";

document.getElementById("c-password").disabled = true;

document.getElementById("password").disabled = true;

document.getElementById("phone").disabled = true;

document.getElementById("email").disabled = true;

}

/*else {
    var blur = document.getElementById("blur");
    blur.classList.toggle('remove');
    
    var popup = document.getElementById("popup");
    popup.classList.toggle('remove');
}*/
    
}
