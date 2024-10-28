// Get the form element
const loginForm = document.querySelector('#loginForm');

// Add submit event listener
loginForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear any previous error messages
    clearErrors();

    // Validation flag
    let isValid = true;

    // Email validation
    const email = document.querySelector('#email').value;
    const emailError = document.querySelector('#emailError');
    if (email === '') {
        emailError.textContent = "Email field cannot be empty.";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation
    const password = document.querySelector('#password').value;
    const passwordError = document.querySelector('#passwordError');
    if (password === '') {
        passwordError.textContent = "Password field cannot be empty.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // If valid, display success message and clear fields
    if (isValid) {
        alert("Login successful!");
        // Clear the fields after successful validation
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    } else {
        console.log('Validation failed');
    }
});

// Function to validate email format with precise regular expression
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Function to clear error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.textContent = '';
    });
}
