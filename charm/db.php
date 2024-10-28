<?php
$servername = "localhost";
$username = "root"; // Database username
$password = ""; // Database password (leave empty for default XAMPP config)
$dbname = "cafe"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

