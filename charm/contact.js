document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessageDiv = document.getElementById('successMessage');
    const inputFields = document.querySelectorAll('#contactForm input');

    // Function to show error messages
    function showError(input, message) {
        const errorSpan = document.getElementById(input.id + 'Error');
        errorSpan.textContent = message;
    }

    // Function to clear error messages
    function clearError(input) {
        const errorSpan = document.getElementById(input.id + 'Error');
        errorSpan.textContent = '';
    }

    // Validate name
    function validateName(nameInput) {
        const name = nameInput.value.trim();
        if (name === '') {
            showError(nameInput, 'Name is required.');
            return false;
        } else if (name.length < 3) {
            showError(nameInput, 'Name must be at least 3 characters long.');
            return false;
        } else {
            clearError(nameInput);
            return true;
        }
    }

    // Validate email
    function validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError(emailInput, 'Email is required.');
            return false;
        } else if (!emailPattern.test(email)) {
            showError(emailInput, 'Enter a valid email address.');
            return false;
        } else {
            clearError(emailInput);
            return true;
        }
    }

    // Validate message
    function validateMessage(messageInput) {
        const message = messageInput.value.trim();
        if (message === '') {
            showError(messageInput, 'Message is required.');
            return false;
        } else {
            clearError(messageInput);
            return true;
        }
    }

    // Function to clear success message
    function clearSuccessMessage() {
        successMessageDiv.style.display = 'none';
    }

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('phone');

        const isNameValid = validateName(nameInput);
        const isEmailValid = validateEmail(emailInput);
        const isMessageValid = validateMessage(messageInput);

        if (isNameValid && isEmailValid && isMessageValid) {
            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

            // Show success message
            successMessageDiv.textContent = 'Thank you for contacting us! We will get back to you soon.';
            successMessageDiv.style.display = 'block';

            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessageDiv.style.display = 'none';
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    });

    // Add event listeners to input fields to clear success message on focus
    inputFields.forEach(input => {
        input.addEventListener('focus', clearSuccessMessage);
    });
});
