document.addEventListener('DOMContentLoaded', () => {

    // Select all rows
    const cartRows = document.querySelectorAll('.cart-item-row');
    const grandTotalElement = document.getElementById('grand-total');

    function updateGrandTotal() {
        let total = 0;
        cartRows.forEach(row => {
            const price = parseInt(row.getAttribute('data-price'));
            const qtyInput = row.querySelector('.qty-num');
            const qty = parseInt(qtyInput.value);
            total += price * qty;
        });

        // Format with commas (e.g., 27,000)
        grandTotalElement.innerText = "Rs " + total.toLocaleString();
    }

    cartRows.forEach(row => {
        const minusBtn = row.querySelector('.qty-decrease');
        const plusBtn = row.querySelector('.qty-increase');
        const qtyInput = row.querySelector('.qty-num');
        const itemTotalElement = row.querySelector('.item-total');
        const price = parseInt(row.getAttribute('data-price'));

        // Function to update single row total
        function updateRowTotal() {
            const qty = parseInt(qtyInput.value);
            const rowTotal = price * qty;
            itemTotalElement.innerText = "PKR " + rowTotal.toLocaleString();
            updateGrandTotal(); // Update the big total at bottom
        }

        // Click Minus
        minusBtn.addEventListener('click', () => {
            let currentQty = parseInt(qtyInput.value);
            if (currentQty > 1) {
                qtyInput.value = currentQty - 1;
                updateRowTotal();
            }
        });

        // Click Plus
        plusBtn.addEventListener('click', () => {
            let currentQty = parseInt(qtyInput.value);
            qtyInput.value = currentQty + 1;
            updateRowTotal();
        });
    });

    // Add this to your existing cart.js inside the DOMContentLoaded event

    const checkoutBtn = document.querySelector('.checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // The confirmation alert
            if (confirm("Proceed to Checkout?")) {
                // If user clicks OK, go to checkout page
                window.location.href = "checkout.html";
            }
        });
    }
});