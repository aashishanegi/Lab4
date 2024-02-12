document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Username: " + username + ", Password: " + password);
    
    if (username === "user" && password === "password") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
});
