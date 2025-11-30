document.addEventListener('DOMContentLoaded', () => {

    // --- 1. QUANTITY SELECTOR LOGIC ---
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.getElementById('qtyInput');

    if (minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            qtyInput.value = currentValue + 1;
        });
    }

    // --- 2. STAR RATING LOGIC ---
    const stars = document.querySelectorAll('#ratingStars i');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = parseInt(star.getAttribute('data-value'));
            
            // Loop through all stars
            stars.forEach(s => {
                const sValue = parseInt(s.getAttribute('data-value'));
                
                // If star value is less than or equal to clicked, fill it (gold)
                if (sValue <= ratingValue) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid'); // Solid star
                    s.classList.add('active');   // Gold color class
                } else {
                    // Empty styling
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                    s.classList.remove('active');
                }
            });

            // Optional: Log to console
            console.log(`User rated product: ${ratingValue} stars`);
        });
    });

    // --- 3. ADD TO CART ALERT LOGIC ---
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartCountElement = document.getElementById('cart-count');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const qty = qtyInput ? qtyInput.value : 1;
            
            // Update Navbar Cart Count (Simulated)
            if(cartCountElement) {
                let currentCount = parseInt(cartCountElement.innerText) || 0;
                cartCountElement.innerText = currentCount + parseInt(qty);
            }

            // --- THE REQUESTED ALERT ---
            alert(`Success! You have added ${qty} bottle(s) of "Midnight Oud" to your cart.`);
            
            // Change button text temporarily
            const originalText = addToCartBtn.innerText;
            addToCartBtn.innerText = "Added to Cart";
            addToCartBtn.style.backgroundColor = "#00d79a";

            setTimeout(() => {
                addToCartBtn.innerText = originalText;
                addToCartBtn.style.backgroundColor = "";
            }, 2000);
        });
    }
});