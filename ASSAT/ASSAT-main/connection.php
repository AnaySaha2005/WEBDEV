just an eg
ei format e thakbe
<?php
$host = "your_database_host"; // e.g., localhost
$username = "your_database_username";
$password = "your_database_password";
$database = "your_database_name";
//ebar je host korbe se eita dekhbe
// Create a connection to the database
$con = mysqli_connect($host, $username, $password, $database);

// Check the connection
if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}
?>
