document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    if(signupForm) {
        signupForm.addEventListener('submit', (e) => {
            // Prevent the form from refreshing the page immediately
            e.preventDefault();

            // Get values (In a real app, you would send these to a server)
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple validation check
            if (username && email && password) {
                // Show success message
                alert(`Welcome to Scent Aura, ${username}! Your account has been created.`);
                
                // Redirect user back to the Homepage
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});