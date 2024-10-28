let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}




let cartItem = document.querySelector('.cartTab');
let closeBtn = document.querySelector('.cartTab .close'); // Select the close button

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

// Hide the cart tab when the close button is clicked
closeBtn.onclick = () => {
    cartItem.classList.remove('active');
}

// window.onscroll = () => {
 //   searchForm.classList.remove('active');
 //   cartItem.classList.remove('active');




// Initialize cart array to store added items
let cart = [];

// Function to add item to the cart
function addToCart(itemId) {
    // Get the product details (name and price)
    let itemName = document.querySelector(`#${itemId} .itemName`).textContent;
    let itemPrice = document.querySelector(`#${itemId} .price`).textContent;

    // Create an item object
    let item = {
        name: itemName,
        price: itemPrice
    };

    // Add the item to the cart array
    cart.push(item);

    // Update the cart tab with the new item
    updateCartTab();
}

// Function to update the cartTab display
function updateCartTab() {
    // Get the cartTab element where items will be displayed
    let cartTab = document.querySelector('#cartTab .cart-items');

    // Clear previous items
    cartTab.innerHTML = '';

    // Loop through the cart array and add each item to the cartTab
    cart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartTab.appendChild(cartItem);
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove item from cart array based on index
    cart.splice(index, 1);

    // Update the cartTab after removal
    updateCartTab();
}

// Attach event listeners to the "Add to Cart" buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the parent container of the button (assumed to be the product item)
        let itemId = e.target.closest('.item-container').id;
        addToCart(itemId);
    });
});

 


const addToCartButtons = document.querySelectorAll('.btn'); // Select all "Add to Cart" buttons
const cartItemsContainer = document.querySelector('.listCart'); // Get the container for cart items (update this to listCart)
const cartTab = document.getElementById('cartTab'); // Get the cart tab element

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const itemCard = button.closest('.box'); // Get the parent item card
    const itemName = itemCard.querySelector('.itemName').textContent;
    const itemPrice = itemCard.querySelector('.price').textContent;
    const itemImage = itemCard.querySelector('img').src;

    // Check if the item is already in the cart
    const existingCartItem = Array.from(cartItemsContainer.children).find(cartItem => {
      return cartItem.querySelector('.name').textContent === itemName;
    });

    if (existingCartItem) {
      // If item exists, increase the quantity
      const quantityElement = existingCartItem.querySelector('.quantity span:nth-child(2)');
      const currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1; // Increase quantity by 1
    } else {
      // Create a new cart item element
      const cartItem = document.createElement('div');
      cartItem.classList.add('item'); // Use item class for styling
      cartItem.innerHTML = `
        <div class="image">
          <img src="${itemImage}" style="width: 50px; height: auto;"> <!-- Adjust size as needed -->
        </div>
        <div class="name">${itemName}</div>
        <div class="price">${itemPrice}</div>
        <div class="quantity">
          <span class="minus">-</span>
          <span>1</span>
          <span class="plus">+</span>
        </div>
      `;

      // Add the cart item to the cart items container
      cartItemsContainer.appendChild(cartItem);
    }

    // Show the cart tab
    cartTab.classList.add('active');

    // Update the cart count
    updateCartCount();
  });
});

function updateCartCount() {
  const cartCountElement = document.querySelector('.fas.fa-shopping-cart span');
  const cartItems = document.querySelectorAll('.listCart .item'); // Update to use the correct class
  cartCountElement.textContent = cartItems.length;
}

// Quantity button functionality
cartItemsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('plus')) {
    const quantityElement = event.target.previousElementSibling;
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1; // Increase quantity
  } else if (event.target.classList.contains('minus')) {
    const quantityElement = event.target.nextElementSibling;
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1; // Decrease quantity
    } else {
      // If quantity is 1 and minus is clicked, remove the item from cart
      const cartItem = event.target.closest('.item');
      cartItemsContainer.removeChild(cartItem);
    }
  }
});



























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



/*signup form validation*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Get the form element
    const signupForm = document.querySelector('#signupForm');

    // Check if form is correctly selected
    if (!signupForm) {
        console.error('Form not found');
        return;
    }

    // Add submit event listener
    signupForm.addEventListener('submit', function(event) {
        console.log('Form submitted');
        // Prevent form submission
        event.preventDefault();

        // Clear any previous error messages
        clearErrors();

        // Validation flag
        let isValid = true;

        // Get form field values
        const firstName = document.querySelector('#firstName').value.trim();
        const lastName = document.querySelector('#lastName').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const nic = document.querySelector('#nic').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const confirmPassword = document.querySelector('#confirmPassword').value.trim();

        // Validate first name
        const firstNameError = document.querySelector('#firstNameError');
        if (firstName === '') {
            firstNameError.textContent = "First name is required.";
            isValid = false;
        }

        // Validate last name
        const lastNameError = document.querySelector('#lastNameError');
        if (lastName === '') {
            lastNameError.textContent = "Last name is required.";
            isValid = false;
        }

        // Validate phone number
        const phoneError = document.querySelector('#phoneError');
        if (phone === '') {
            phoneError.textContent = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) { // Example: should be exactly 10 digits
            phoneError.textContent = "Phone number must be 10 digits.";
            isValid = false;
        }

        // Validate NIC
        const nicError = document.querySelector('#nicError');
        if (nic === '') {
            nicError.textContent = "NIC is required.";
            isValid = false;
        }

        // Validate email
        const emailError = document.querySelector('#emailError');
        if (email === '') {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password
        const passwordError = document.querySelector('#passwordError');
        if (password === '') {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // Validate confirm password
        const confirmPasswordError = document.querySelector('#confirmPasswordError');
        if (confirmPassword === '') {
            confirmPasswordError.textContent = "Confirm password is required.";
            isValid = false;
        } else if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // If valid, submit the form (or handle submission via JavaScript)
        if (isValid) {
            alert("Form submitted successfully!");
            // Uncomment below to submit the form if action is defined
            // signupForm.submit();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to clear error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category a');
    const menuItems = document.querySelectorAll('.box-container .box');

    // Function to filter menu items
    function filterMenu(category) {
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add event listeners to category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterMenu(category);
        });
    });

    // Show all items by default
    filterMenu('all');
});