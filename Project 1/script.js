const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//function to update class and message for errors 
function showError(input, message) {
    //get the parent element of the input field i.e .form-control
    const fromControl = input.parentElement;
    // replace the class error 
    fromControl.className = 'form-control error';
    const small = fromControl.querySelector('small');
    //replace the text for the small element using input messege
    small.innerText = message;

}

//function to update class for success
function showSuccess(input) {
    //get the parent element of the input field i.e .form-contol
    const fromControl = input.parentElement;
    // replace the class -add success
    fromControl.className = 'form-control success';

}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'email is required')
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'password is required')
    } else {
        showSuccess(password);
    }    

    if(password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else {
        showSuccess(password2);
    }
});