const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("contra");
const ingresoButton = document.getElementById("ingreso");
const email = "admin@threaded.com";
const password = "threaded123";

ingresoButton.onclick = function(){
    if (emailinput.value === email && passwordinput.value === password) {
        window.open("start/index.html");
    }
} 
