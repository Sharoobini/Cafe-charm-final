document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Form fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const nic = document.getElementById('nic');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Error messages
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneError = document.getElementById('phoneError');
    const nicError = document.getElementById('nicError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validation flags
    let isValid = true;

    // Validate First Name
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "First Name is required.";
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameError.style.display = "none";
    }

    // Validate Last Name
    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Last Name is required.";
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastNameError.style.display = "none";
    }

    // Validate Phone Number
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone Number is required.";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.textContent = "Please enter a valid 10-digit phone number.";
            phoneError.style.display = "block";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }
    }

    // Validate NIC (adjust regex if necessary)
    if (nic.value.trim() === "") {
        nicError.textContent = "NIC is required.";
        nicError.style.display = "block";
        isValid = false;
    } else {
        const nicPattern = /^\d{12}$/;
        if (!nicPattern.test(nic.value)) {
            nicError.textContent = "Please enter a valid NIC.";
            nicError.style.display = "block";
            isValid = false;
        } else {
            nicError.style.display = "none";
        }
    }

    // Validate Email
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }
    }

    // Validate Password
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Validate Confirm Password
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm Password is required.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        this.submit();
    }
});
