Scripts.js

const buttons = document.querySelectorAll('.toggle-details');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display ='none' ? 'block' : 'none';
        button.textContent = button.textContent ='Show Details' ? 'Hide Details' : 'Show Details';
    });
});



PART 3  ADD  FORM VALIDATION

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    validateForm();
});


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !message) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }
}
