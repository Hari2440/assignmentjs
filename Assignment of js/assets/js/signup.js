const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validationOfInputFields()) {
        register();
    }
});

function validationOfInputFields() {
    const firstNameValue = firstName.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const mailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,6})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{4,16}$/;

    resetValidationMessages();

    let isValid = true;

    if (firstNameValue === '') {
        ifErrorOccur(firstName, 'Name cannot be empty');
        isValid = false;
    }

    if (mailValue === '') {
        ifErrorOccur(mail, 'Email cannot be empty');
        isValid = false;
    } else if (!mailRegex.test(mailValue)) {
        ifErrorOccur(mail, 'Invalid Email');
        isValid = false;
    }

    if (passwordValue === '') {
        ifErrorOccur(password, 'Password is required');
        isValid = false;
    } else if (!passwordRegex.test(passwordValue)) {
        ifErrorOccur(password, 'Invalid password');
        isValid = false;
    }

    if (confirmPasswordValue === '') {
        ifErrorOccur(confirmPassword, 'Confirm Password is required');
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        ifErrorOccur(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function ifErrorOccur(input, error) {
    const inputField = input.parentElement;
    const errorMessage = document.createElement('small');
    errorMessage.innerText = error;
    errorMessage.className = 'error-message';
    inputField.appendChild(errorMessage);
    inputField.classList.add('error');
}

function resetValidationMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    const inputFields = document.querySelectorAll('.inputFields');
    inputFields.forEach(field => field.classList.remove('error'));
}

function register() {
    const firstNameValue = firstName.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const user = {
        name: firstNameValue,
        mail: mailValue,
        password: passwordValue
    };
    localStorage.setItem(user.mail, JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    clearAllFields();
    alert("Account created successfully");
    window.location.href = 'login.html';
}

function clearAllFields() {
    firstName.parentElement.classList.remove('error');
    firstName.value = "";
    mail.parentElement.classList.remove('error');
    mail.value = "";
    password.parentElement.classList.remove('error');
    password.value = "";
    confirmPassword.parentElement.classList.remove('error');
    confirmPassword.value = "";
}