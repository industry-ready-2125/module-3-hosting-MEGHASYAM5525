function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Validate username
    if (username === "") {
        alert("Please enter a username");
        return false;
    }

    // Validate password
    if (password === "") {
        alert("Please enter a password");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        alert("Password must contain both letters and numbers");
        return false;
    }

    // Validate email
    if (email === "") {
        alert("Please enter your email address");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }


    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }
});
