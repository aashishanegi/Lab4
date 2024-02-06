function submitForm() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
      if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Placeholder for authentication logic (e.g., send data to server)
        alert("Login successful!");
    }
}
