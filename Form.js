document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const displayContainer = document.getElementById('display-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        let isValid = true;
        displayContainer.innerHTML = ''; // Clear previous output
        document.querySelectorAll('.error').forEach(error => error.remove()); // Clear error messages

        // Check for validation errors
        if (!validateForm()) {
            isValid = false;
        }

        // If the form is valid, display the data and store in sessionStorage
        if (isValid) {
            const formData = new FormData(form);
            let output = '<h3>Submitted Details:</h3>';
            output += '<ul>';
            formData.forEach((value, key) => {
                output += `<li><strong>${key}:</strong> ${value}</li>`;
                sessionStorage.setItem(key, value); // Store each form entry in sessionStorage
            });
            output += '</ul>';
            displayContainer.innerHTML = output;

            // Redirect to the display page
            window.location.href = 'Target.html';  // Now moved inside the valid check
        }
    });

    function validateForm() {
        let isValid = true;

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const gender = document.querySelectorAll('input[name="Gender"]');
        const dob = document.getElementById('dob');
        const course = document.getElementById('course');
        const address = document.getElementById('address');
        const agree = document.getElementById('agree');

        if (firstName.value.trim() === '') {
            showError(firstName, 'First name is required');
            isValid = false;
        }

        if (lastName.value.trim() === '') {
            showError(lastName, 'Last name is required');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Enter a valid email address');
            isValid = false;
        }

        if (!/^\d{10}$/.test(phone.value)) {
            showError(phone, 'Enter a valid 10-digit phone number');
            isValid = false;
        }

        if (![...gender].some(radio => radio.checked)) {
            showError(document.querySelector('.gender-group'), 'Select a gender');
            isValid = false;
        }

        if (dob.value.trim() === '') {
            showError(dob, 'Date of birth is required');
            isValid = false;
        }

        if (course.value === '') {
            showError(course, 'Select a course');
            isValid = false;
        }

        if (address.value.trim() === '') {
            showError(address, 'Address is required');
            isValid = false;
        }

        if (!agree.checked) {// Get the form and button elements
const form = document.getElementById('registration-form');
const submitBtn = document.getElementById('submit-btn');
const displayContainer = document.getElementById('display-container');

// Handle the click event on the button
submitBtn.addEventListener('click', function () {
    // Get form data
    const formData = new FormData(form);

    // Prepare the output string
    let output = '<h3>Submitted Details:</h3>';
    output += '<ul>';
    formData.forEach((value, key) => {
        output += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    output += '</ul>';

    // Display the values in the container
    displayContainer.innerHTML = output;
});

            showError(agree.parentNode, 'You must agree to the terms');
            isValid = false;
        }

        return isValid;
    }

    function showError(element, message) {
        const error = document.createElement('span');
        error.classList.add('error');
        error.textContent = message;
        element.parentNode.appendChild(error);
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
