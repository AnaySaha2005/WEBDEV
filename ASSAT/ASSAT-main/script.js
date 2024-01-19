document.addEventListener("DOMContentLoaded", function () {
    // Attach the submitForm function to the form submission
    document.getElementById("login-form").addEventListener("submit", submitForm);
});

function submitForm(event) {
    event.preventDefault();

    // Retrieve form data
    var user_name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
    var user_type = document.querySelector('input[name="userType"]:checked').value;

    // Simple client-side validation
    if (user_name.trim() === '' || password.trim() === '') {
        document.getElementById("error-message").innerHTML = "Please enter both username and password";
        return;
    }

    // Clear previous error message
    document.getElementById("error-message").innerHTML = "";

    // Send data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;

            if (response === "success") {
                // Redirect or perform other actions upon successful login
                if (user_type === "student") {
                    window.location.href = "student_dashboard.php";
                } else if (user_type === "teacher") {
                    window.location.href = "teacher_dashboard.php";
                }
            } else {
                // Display error message from the server
                document.getElementById("error-message").innerHTML = response;
            }
        }
    };

    // Encode data for POST request
    var data = "user_name=" + encodeURIComponent(user_name) + "&password=" + encodeURIComponent(password);
    xhr.send(data);
}
