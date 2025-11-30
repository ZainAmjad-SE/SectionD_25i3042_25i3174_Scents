document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECT CART ELEMENTS
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    // 2. DEFINE THE ADD TO CART FUNCTION
    window.addToCart = function(buttonElement) {
        
        // Disable button temporarily to prevent double clicks
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "Added!";
        buttonElement.style.backgroundColor = "#00d79a"; // Turn green
        buttonElement.disabled = true;

        // Increase Count
        cartCount++;
        
        // Update Navbar Badge
        if(cartCountElement) {
            cartCountElement.innerText = cartCount;
            // Add a little 'bump' animation
            cartCountElement.style.transform = "scale(1.2)";
            setTimeout(() => {
                cartCountElement.style.transform = "scale(1)";
            }, 200);
        }

        // Revert button after 1.5 seconds
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.backgroundColor = ""; // Revert to CSS default
            buttonElement.disabled = false;
        }, 1500);
    };

    // Note: The Navbar Search and Mobile Menu logic is handled by 'menu_toggle.js'
    // which is included in the HTML file.
});