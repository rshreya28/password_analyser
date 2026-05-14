function checkPassword(){

    let password =
    document.getElementById("password").value;

    let strengthText =
    document.getElementById("strength-text");

    let bar =
    document.getElementById("bar");

    let suggestion =
    document.getElementById("suggestion");

    let score = 0;

    // REGEX CHECKS

    let hasLength = password.length >= 8;

    let hasUpper = /[A-Z]/.test(password);

    let hasLower = /[a-z]/.test(password);

    let hasNumber = /[0-9]/.test(password);

    let hasSpecial =
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // UPDATE CHECKLIST

    updateCheck("length-check", hasLength);

    updateCheck("uppercase-check", hasUpper);

    updateCheck("lowercase-check", hasLower);

    updateCheck("number-check", hasNumber);

    updateCheck("special-check", hasSpecial);

    // CALCULATE SCORE

    if(hasLength) score++;

    if(hasUpper) score++;

    if(hasLower) score++;

    if(hasNumber) score++;

    if(hasSpecial) score++;

    // PASSWORD STRENGTH

    if(score <= 2){

        strengthText.innerHTML =
        "Weak Password";

        strengthText.style.color = "red";

        bar.style.width = "33%";

        bar.style.background = "red";

        suggestion.innerHTML =
        "Add uppercase letters, numbers, and special symbols.";

    }

    else if(score <= 4){

        strengthText.innerHTML =
        "Medium Password";

        strengthText.style.color = "orange";

        bar.style.width = "66%";

        bar.style.background = "orange";

        suggestion.innerHTML =
        "Increase length and use more unique characters.";

    }

    else{

        strengthText.innerHTML =
        "Strong Password";

        strengthText.style.color = "#00ff99";

        bar.style.width = "100%";

        bar.style.background = "#00ff99";

        suggestion.innerHTML =
        "Excellent password security.";

    }
}

// CHECKLIST UPDATE FUNCTION

function updateCheck(id, condition){

    let element = document.getElementById(id);

    if(condition){

        element.innerHTML =
        "✅ " + element.innerHTML.substring(2);

        element.style.color = "#00ff99";
    }

    else{

        element.innerHTML =
        "❌ " + element.innerHTML.substring(2);

        element.style.color = "white";
    }
}

// SHOW/HIDE PASSWORD

function togglePassword(){

    let passwordInput =
    document.getElementById("password");

    let button =
    document.querySelector(".show-btn");

    if(passwordInput.type === "password"){

        passwordInput.type = "text";

        button.innerHTML = "Hide";
    }

    else{

        passwordInput.type = "password";

        button.innerHTML = "Show";
    }
}

// GENERATE STRONG PASSWORD

function generatePassword(){

    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i = 0; i < 14; i++){

        let randomIndex =
        Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("generated-password")
    .innerHTML =
    "Generated Password: <br><br>" + password;
}