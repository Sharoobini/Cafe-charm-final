<?php
// Database connection details
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "cafe";

// Create connection
$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['Email'];
    $password = $_POST['password'];

    if (!empty($email) && !empty($password)) {
        // Query to retrieve the user by email
        $SELECT = "SELECT password FROM coffee WHERE Email = ? LIMIT 1";
        
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($stored_password);
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->fetch();
            // Compare the plain text passwords directly
            if ($password === $stored_password) {
                session_start(); // Start a session
                $_SESSION['Email'] = $email; // Store the email in session
                header("Location: loghome.html");
                // Redirect or load the user dashboard
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "No user found with that email.";
        }

        $stmt->close();
    } else {
        echo "All fields are required.";
    }
}

$conn->close();
?>