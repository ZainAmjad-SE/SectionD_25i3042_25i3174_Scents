document.addEventListener('DOMContentLoaded', () => {
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const form = document.getElementById('checkoutForm');

    if (placeOrderBtn && form) {
        placeOrderBtn.addEventListener('click', (e) => {
            // Prevent the button from submitting the form normally
            e.preventDefault();

            // 1. Get all input fields from the form
            const inputs = form.querySelectorAll('input');
            let isFormValid = true;
            
            // 2. Loop through each input to check if it's empty
            inputs.forEach(input => {
                if(input.value.trim() === '') {
                    // If empty, mark as invalid
                    isFormValid = false;
                    input.style.borderColor = "red"; // Turn border red
                } else {
                    // If filled, reset border color
                    input.style.borderColor = "#e5e7eb";
                }
            });

            // 3. Show Alerts based on result
            if (isFormValid) {
                // Success
                alert("Congratulations! Your order has been placed successfully.");
                window.location.href = "index.html"; // Redirect back to Home
            } else {
                // Failure
                alert("Incomplete! Please fill in all required fields.");
            }
        });
    }

    // --- Optional: Payment Method Styling (Click effect) ---
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Reset all borders
            paymentOptions.forEach(opt => opt.style.borderColor = '#e5e7eb');
            // Highlight clicked
            option.style.borderColor = '#00d79a';
            // Check the radio button inside
            const radio = option.querySelector('input[type="radio"]');
            if(radio) radio.checked = true;
        });
    });
});