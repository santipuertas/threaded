const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("contra");
const ingresoButton = document.getElementById("ingreso");
const email = "santipuertas90@gmail.com";
const password = "santiph123";

ingresoButton.onclick = function(){
    if (emailinput.value === email && passwordinput.value === password) {
        window.open("start/index.html");
    }
} 