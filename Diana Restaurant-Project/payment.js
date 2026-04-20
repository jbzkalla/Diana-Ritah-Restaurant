// Payment Page Logic
const amountInput = document.getElementById('payment-amount');
const total = localStorage.getItem('cartTotal') || 0;
amountInput.value = 'UGX ' + total;

const form = document.getElementById('payment-form');
const successMsg = document.getElementById('payment-success');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate payment
    setTimeout(() => {
        successMsg.classList.remove('hidden');
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        form.classList.add('hidden');
    }, 1000);
});
