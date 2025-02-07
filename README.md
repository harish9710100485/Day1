# Student Registration Form

## Overview
This project is a **Student Registration Form** built using **HTML, CSS, and JavaScript**. It allows students to enter their personal details, select a course, and submit their registration.

## Features
- Form validation for required fields.
- Pattern validation for phone numbers.
- Gender selection via radio buttons.
- Course selection via a dropdown menu.
- Terms and conditions agreement checkbox.
- Stores user input in **sessionStorage**.
- Redirects to `Target.html` after submission.

## Technology Stack
- **HTML** for structure
- **CSS (Form.css)** for styling
- **JavaScript (Form.js)** for interactivity

## File Structure
```
project-folder/
│── index.html          # Main form page
│── Form.css            # Stylesheet for the form
│── Form.js             # JavaScript for handling form logic
│── Target.html         # Page to display submitted data
```

## Installation & Usage
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Fill in the form and submit.
4. Data will be stored in `sessionStorage` and redirected to `Target.html`.

## JavaScript Functionality
- Prevents form submission if required fields are empty.
- Stores form data in **sessionStorage**.
- Redirects user to `Target.html`.

```javascript
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    // Store data in sessionStorage
    for (const [key, value] of Object.entries(formObject)) {
        sessionStorage.setItem(key, value);
    }

    // Redirect to target page (display.html)
    window.location.href = 'Target.html';
});
```

## CSS Styling (Form.css)
```css
.error {
    color: red;
    font-size: 0.9em;
}
#display-container {
    margin-top: 20px;
}
```

## Conclusion
This project provides a functional and user-friendly **student registration system** using web technologies. The use of `sessionStorage` ensures temporary data storage before displaying it on `Target.html`.

---
**Author:** Harish  
**Internship:** MinervaSoft  
**Project:** Student Registration Form

