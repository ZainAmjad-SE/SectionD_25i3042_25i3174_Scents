/* Handles the opening and closing of the off-canvas menu by toggling the
 * 'canvas_active' class on the body element.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SEARCH BAR TOGGLE FUNCTIONALITY ---
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const searchCloseTrigger = document.querySelector('.search-form-wrapper');

    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle the 'active' class on the search bar
            searchBar.classList.toggle('active');
            
            // Optional: Change icon from Search to Times (X)
            const icon = searchIcon.querySelector('i');
            if (searchBar.classList.contains('active')) {
                icon.classList.remove('fa-magnifying-glass');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-magnifying-glass');
            }
        });
    }

    // --- 2. OFF-CANVAS MENU FUNCTIONALITY ---
    const body = document.body;
    const openButton = document.querySelector('.canvas_open a'); 
    const closeButton = document.querySelector('.canvas_close a');
    const overlay = document.querySelector('.off_canvas_overlay'); 
    const activeClass = 'canvas_active';

    // Open Menu
    if (openButton) {
        openButton.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.add(activeClass);
        });
    }

    // Close Menu (Click X)
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.remove(activeClass);
        });
    }

    // Close Menu (Click Overlay)
    if (overlay) {
        overlay.addEventListener('click', () => {
            body.classList.remove(activeClass);
        });
    }

    // --- 3. IMAGE SLIDER FUNCTIONALITY ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    let currentSlide = 0;
    let slideInterval;

    // Function to show specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Handle wrapping (infinite loop)
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Add active class to current slide
        slides[currentSlide].classList.add('active');
    }

    // Next Slide Logic
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous Slide Logic
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event Listeners for Arrows
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval(); // Restart timer when manually clicked
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    // Automatic Sliding (Auto-play)
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Initialize Slider
    if (slides.length > 0) {
        startInterval();
    }
});