<?php
session_start();
include("db.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Ensure all required POST values are set
    $first_name = isset($_POST['fname']) ? $_POST['fname'] : '';
    $last_name = isset($_POST['lname']) ? $_POST['lname'] : '';
    $nic = isset($_POST['nic']) ? $_POST['nic'] : '';
    $E_mail = isset($_POST['Email']) ? $_POST['Email'] : '';
    $phone_no = isset($_POST['phoneNumber']) ? $_POST['phoneNumber'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $Confirmpassword = isset($_POST['confirm_password']) ? $_POST['confirm_password'] : '';

    // Validate if last name is filled in
    if (!empty($last_name) && !empty($first_name) && !empty($nic) && !empty($E_mail) && !empty($phone_no) && !empty($password) && !empty($Confirmpassword)) {
        // Insert into database
        $query = $conn->prepare("INSERT INTO coffee (fname, lname, nic, Email, PhoneNumber, Password, Confirm_password) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $query->bind_param("sssssss", $first_name, $last_name, $nic, $E_mail, $phone_no, $password, $Confirmpassword);
        
        if ($query->execute()) {
            // Redirect to homepage.php after successful registration
            header("Location: homepage.html");
            exit; // Always use exit after header redirection
        } else {
            echo "<script type='text/javascript'>alert('Error: " . $query->error . "');</script>";
        }
    } else {
        echo "<script type='text/javascript'>alert('Please fill in all required fields.');</script>";
    }
}
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Cafe Charm</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <a href="#" class="logo">
            <img class="cafe" src="logo-removebg-preview.png">
        </a>

        <nav class="navbar">
        <a href="index.html">home</a>
            <a href="index.html#about">about</a>
            <a href="index.html#menu">menu</a>
            <a href="index.html#contact">contact</a>
            <a href="login.html">My Account</a>
        </nav>

        <div class="icons">
            <div class="fas fa-search" id="search-btn"></div>
            <div class="fas fa-shopping-cart" id="cart-btn"></div>
        </div>
    </header>

    <section class="signup" id="signup">
        <h1 class="heading"> <span>Sign Up</span> for an account</h1>
        
        <div class="signup-form">
            <form id="signupForm"  method="POST" action="register.php">
                <div class="inputBox">
                    <span class="fas fa-user"></span>
                    <input type="text" id="firstName" placeholder="First Name" name="fname">
                    <span class="error-message" id="firstNameError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-user"></span>
                    <input type="text" id="lastName" placeholder="Last Name"  name="lname">
                    <span class="error-message" id="lastNameError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-phone"></span>
                    <input type="tel" id="phone" placeholder="Phone Number"  name="phoneNumber">
                    <span class="error-message" id="phoneError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-id-card"></span>
                    <input type="text" id="nic" placeholder="NIC"  name="nic">
                    <span class="error-message" id="nicError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-envelope"></span>
                    <input type="email" id="email" placeholder="email" name="Email">
                    <span class="error-message" id="emailError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-lock"></span>
                    <input type="password" id="password" placeholder="Password"  name="password">
                    <span class="error-message" id="passwordError"></span>
                </div>
                <div class="inputBox">
                    <span class="fas fa-lock"></span>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password"  name="confirm_password">

                    <span class="error-message" id="confirmPasswordError"></span>
                </div>
                <input type="submit" value="Sign Up" class="btn" name="signUp">
                <p>Already have an account? <a href="login.html">Login</a></p>
            </form>
        </div>
    </section>
    
    
    
    

    <section class="footer">
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>

        <div class="links">
        <a href="index.html">home</a>
            <a href="index.html#about">about</a>
            <a href="index.html#menu">menu</a>
            <a href="index.html#contact">contact</a>
            <a href="login.html">My Account</a>
        </div>

        <div class="credit"> © Cafe Charm 2024 | All rights reserved</div>
    </section>


<script src="signup.js"></script>    
</body>
</html>
