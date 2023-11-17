document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Redirect to the dashboard or another page upon successful signup
                    window.location.href = '/dashboard';
                } else {
                    // Handle signup errors (e.g., username already taken)
                    alert(data.error);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});
