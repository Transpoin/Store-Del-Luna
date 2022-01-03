function validateRegister(event) {
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var error = document.getElementById("errormsg");
    error.innerHTML = "";
    var emailIsValid = false; //checking @
    for(let i = 0; i < email.value.length; i++)
    {
        if(email.value[i] == '@')
        {
            emailIsValid = true;
            break;
        }
    }
    if(!emailIsValid || !email.value.endsWith(".com"))
    {
        error.innerHTML = "Email is not valid!";
        return;
    }
    if(username.value.length < 5)
    {
        error.innerHTML = "Username must have 5 characters or longer!";
        return;
    }
    var isNumeric = false;
    var isAlphabet = false;
    var isCapital = false;
    for(let i = 0; i < password.value.length; i++)
    {
        if(password.value[i] >= '0' && password.value[i] <= '9')
            isNumeric = true;
        if(password.value[i] >= 'a' && password.value[i] <= 'z')
            isAlphabet = true;
        if(password.value[i] >= 'A' && password.value[i] <= 'Z')
            isCapital = true;
        if(isAlphabet && isCapital && isNumeric)
            break;
    }
    if(!isAlphabet || !isNumeric || !isCapital)
    {
        error.innerHTML = "Password must have at least a alphabet, a number and a capital alphabet!";
        return;
    }
    if(password.value.length < 8)
    {
        error.innerHTML = "Password must have 8 characters or longer!";
        return;
    }
    var rePassword = document.getElementById("repassword");
    if(password.value != rePassword.value)
    {
        error.innerHTML = "Re-entered password is not equal to the password!";
        return;
    }
    var fullName = document.getElementById("full-name");
    if(fullName.value.length < 6)
    {
        error.innerHTML = "Full name must have 6 characters or longer!";
        return;
    }
    var age = document.getElementById("age");
    if(age.value < 7)
    {
        error.innerHTML = "You must be 7 years old or older to register!";
        return;
    }
    var isMale = document.getElementById("male").checked;
    var isFemale = document.getElementById("female").checked;
    if(!isMale && !isFemale)
    {
        error.innerHTML = "Please select a gender!";
        return;
    }
    var privacy = document.getElementById("privacypolicy").checked;
    if(!privacy)
    {
        error.innerHTML = "You must agree with our policy!";
        return;
    }
    alert("User has been registered successfully");
    return;
}