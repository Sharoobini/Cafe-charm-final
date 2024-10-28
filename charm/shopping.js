
function updateCartTab() {
    const cartTab = document.querySelector('.listCart');
    cartTab.innerHTML = ''; // Clear the existing items

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');

        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            </div>
            <div class="quantity">
                <span class="decrease">-</span>
                <span>${item.quantity}</span>
                <span class="increase">+</span>
            </div>
            <button class="removeBtn">Remove</button>
        `;

        cartTab.appendChild(cartItem);

        // Add event listeners for quantity controls and remove buttons
        cartItem.querySelector('.decrease').addEventListener('click', () => changeQuantity(item.id, 'decrease'));
        cartItem.querySelector('.increase').addEventListener('click', () => changeQuantity(item.id, 'increase'));
        cartItem.querySelector('.removeBtn').addEventListener('click', () => removeFromCart(item.id));
    });
}

// Function to add an item to the cart
function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity++;
    } else {
        // Add new item to the cart
        cartItems.push({ ...item, quantity: 1 });
    }

    // Show the cart tab
    document.querySelector('.cartTab').classList.add('active');

    // Update the cart UI
    updateCartTab();
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.addtobtn').forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            id: button.getAttribute('data-id'),
            name: button.getAttribute('data-name'),
            price: button.getAttribute('data-price'),
            img: button.getAttribute('data-img'),
        };

        addToCart(item);
    });
});

// Function to change the quantity of items
function changeQuantity(itemId, action) {
    const item = cartItems.find(cartItem => cartItem.id === itemId);

    if (item) {
        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity--;
        }
    }

    updateCartTab();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
    cartItems = cartItems.filter(cartItem => cartItem.id !== itemId);
    updateCartTab();
}

