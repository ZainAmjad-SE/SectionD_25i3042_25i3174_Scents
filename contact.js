document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop actual page reload

            // Get values
            const name = document.getElementById('c-name').value.trim();
            const subject = document.getElementById('c-subject').value.trim();
            const email = document.getElementById('c-email').value.trim();
            const message = document.getElementById('c-message').value.trim();

            if (name && subject && email && message) {
                // Success Scenario
                alert(`Thank you, ${name}! We have received your message regarding "${subject}". We will contact you at ${email} shortly.`);
                
                // Clear the form
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});