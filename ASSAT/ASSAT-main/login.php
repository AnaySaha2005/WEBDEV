<?php
session_start();

// Include database connection details
include("connection.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Retrieve form data
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];

    // Validate form data
    if (!empty($user_name) && !empty($password)) {
        // Sanitize user input to prevent SQL injection
        $user_name = mysqli_real_escape_string($con, $user_name);
        $password = mysqli_real_escape_string($con, $password);

        // Query database for user
        $query = "SELECT * FROM users WHERE user_name = '$user_name' LIMIT 1";
        $result = mysqli_query($con, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            // Verify password
            if (password_verify($password, $user_data['password'])) {
                // Password is correct, set session variables
                $_SESSION['user_id'] = $user_data['user_id'];
                echo "success";
                exit;
            } else {
                echo "Incorrect password";
            }
        } else {
            echo "User not found";
        }
    } else {
        echo "Please enter both username and password";
    }
}
?>
