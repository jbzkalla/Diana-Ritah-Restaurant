// Simple Shopping Cart Logic
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function renderCart() {
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = 'UGX 0';
        return;
    }
    let total = 0;
    cartContainer.innerHTML = '<ul class="divide-y">' + cartItems.map((item, i) => {
        total += item.price * item.qty;
        return `<li class="flex justify-between py-2 items-center">
            <span>${item.name} x ${item.qty}</span>
            <span>UGX ${item.price * item.qty}</span>
            <button onclick="removeFromCart(${i})" class="btn btn-xs btn-error ml-2">Remove</button>
        </li>`;
    }).join('') + '</ul>';
    cartTotal.textContent = 'UGX ' + total;
    localStorage.setItem('cartTotal', total);
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

renderCart();
