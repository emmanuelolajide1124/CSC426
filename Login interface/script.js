document.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let message =
        document.getElementById("message");

    // Clear previous message
    message.innerHTML = "";
    message.className = "";

    // Input Validation
    if(username === "" || password === ""){
        message.innerHTML =
        "Please fill in all fields.";

        message.classList.add("error");
        return;
    }

    // Demo Authentication
    let validUsername = "admin";
    let validPassword = "12345";

    if(username === validUsername &&
       password === validPassword){

        message.innerHTML =
        "Login Successful! Welcome Admin.";

        message.classList.add("success");

    }else{

        message.innerHTML =
        "Invalid Username or Password.";

        message.classList.add("error");
    }
});