import { email, password } from "./user.js";
/*import { email as email1, password as password1 } from "./user (1).js";
import { email as email2, password as password2 } from "./user(2).js";
import { email as email3, password as password3 } from "./user(3).js";
import { email as email4, password as password4 } from "./user(4).js";
import { email as email5, password as password5 } from "./user(5).js";*/

    let emailinput = document.getElementById("email");
    let passwordinput = document.getElementById("contra");
    const ingresoButton = document.getElementById("ingreso")

ingresoButton.onclick = function(){
    if (emailinput.value === email && passwordinput.value === password) {
        window.open("../../index.html");
    }
}   
/*ingresoButton.onclick = function(){
    if (emailinput.value === email1 && passwordinput.value === password1) {
        window.open("../../index.html");
    }
}
ingresoButton.onclick = function(){
    if (emailinput.value === email2 && passwordinput.value === password2) {
        window.open("../../index.html");
    }
}
ingresoButton.onclick = function(){
    if (emailinput.value === email3 && passwordinput.value === password3) {
        window.open("../../index.html");
    }
}
ingresoButton.onclick = function(){
    if (emailinput.value === email4 && passwordinput.value === password4) {
        window.open("../../index.html");
    }
}
ingresoButton.onclick = function(){
    if (emailinput.value === email5 && passwordinput.value === password5) {
        window.open("../../index.html");
    }
}*/