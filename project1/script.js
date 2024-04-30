function handlePhoneNumberInput(event) {
    // To get input value and remove any non-number characters
    event.target.value = event.target.value.replace(/\D/g, '');
}

function submitForm() {
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('message').value;

// Validates if phone number is not empty and contains only numeric characters
    if (phoneNumber.trim() === '' || !/^\d+$/.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Send form data via email (dummy implementation)
    var mailToLink = 'mailto:anzn.blink182@gmail.com' +
                     '?subject=Contact Form Submission' +
                     '&body=Name: ' + name +
                     '%0AEmail: ' + email +
                     '%0APhone Number: ' + phoneNumber +
                     '%0AMessage: ' + message;

    // Open default email client with pre-filled data
    window.location.href = mailToLink;
}
// Add event listener to the phone number input field to handle input events
var phoneNumberInput = document.getElementById('phoneNumber');
phoneNumberInput.addEventListener('input', handlePhoneNumberInput);