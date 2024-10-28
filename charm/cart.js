let cartItem = document.querySelector('.cartTab');
let cartList = document.querySelector('.listCart'); // Cart list to display items
let closeBtn = document.querySelector('.cartTab .close'); // Close button

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

// Close the cart tab when the close button is clicked
closeBtn.onclick = () => {
    cartItem.classList.remove('active');
}

// Remove 'active' class when the window is scrolled
window.onscroll = () => {
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Function to add item to the cart
function addToCart(name, price, img) {
    // Create a new cart item element
    let cartRow = document.createElement('div');
    cartRow.classList.add('item');
    
    cartRow.innerHTML = `
        <img src="${img}" alt="${name}">
        <div>
            <h3>${name}</h3>
            <p>$${price}</p>
        </div>
        <div class="quantity">
            <span class="decrease">-</span>
            <span class="number">1</span>
            <span class="increase">+</span>
        </div>
        <span class="remove">&times;</span>
    `;

    // Add the new item to the cart list
    cartList.appendChild(cartRow);

    // Show the cart when an item is added
    cartItem.classList.add('active');

    // Add event listeners for quantity and remove buttons
    cartRow.querySelector('.remove').onclick = () => {
        cartRow.remove();
    };

    cartRow.querySelector('.increase').onclick = () => {
        let quantity = cartRow.querySelector('.number');
        quantity.innerText = parseInt(quantity.innerText) + 1;
    };

    cartRow.querySelector('.decrease').onclick = () => {
        let quantity = cartRow.querySelector('.number');
        if (parseInt(quantity.innerText) > 1) {
            quantity.innerText = parseInt(quantity.innerText) - 1;
        }
    };
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        let name = event.target.getAttribute('data-name');
        let price = event.target.getAttribute('data-price');
        let img = event.target.getAttribute('data-img');

        // Call the function to add the item to the cart
        addToCart(name, price, img);
    });
});
