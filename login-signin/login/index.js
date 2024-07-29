import { email, password } from "./user.js";

    let emailinput = document.getElementById("email");
    let passwordinput = document.getElementById("contra");

    ingresoButton.onclick = function() {
            if (emailinput.value === email && passwordinput.value === password) {
                window.location.href = "../../index.html";
            } else {
                alert("Invalid credentials");
        }
    }  
    
