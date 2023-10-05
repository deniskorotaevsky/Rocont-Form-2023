const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const fathername = document.getElementById('fathername');
const checkConfirmation = document.getElementById('checkConfirmation');

let phone = document.querySelector('#phone');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const fathernameValue = fathername.value.trim();

    if (surnameValue === '') {
        setError(surname);
    } else {
        setSuccess(surname);
    }

    if (usernameValue === '') {
        setError(username);
    } else {
        setSuccess(username);
    }

    if (fathernameValue === '') {
        setError(fathername);
    } else {
        setSuccess(fathername);
    }

    if (!/^\+\d*$/.test(phone.value)) {
        setError(phone);
    } else {
        setSuccess(phone);
    }
};



