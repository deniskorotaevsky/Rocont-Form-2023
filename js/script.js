const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const fathername = document.getElementById('fathername');
const phone = document.querySelector('#phone');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    toggleLoader()
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

function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('button').disabled = !isValid
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const fathernameValue = fathername.value.trim();
    var phoneValue = phone.value;

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

    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var valid = re.test(phoneValue);
    if (!valid) {
        setError(phone);
        document.querySelector('.errorPhone').innerHTML = 'Телефон введен некорректно';
    } else {
        setSuccess(phone);
    }
};

let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

const comment = [];

fileInput.addEventListener('change', function () {
    for (let i = 0; i < fileInput.files.length; i++) {
        comment.push(fileInput.files[i].name);
        draw()
    }
});

function deleteCurrentFile(thisElement) {
    let currentIndex = thisElement.id;
    let el = currentIndex.split('_')[1];
    if (el <= comment.length) {
        comment.splice(el, 1)
    }
    draw()
}

function draw() {
    let out = '';
    for (let i = 0; i < comment.length; i++) {
        out += `
        <div class="input-file-li_row" id="buttonBusket_${i}" onclick="deleteCurrentFile(this)">
                <img src="./images/basket.png" alt="/"/>
                <li>${comment[i]}</li>
        </div>
        `
    }
    fileList.innerHTML = out
};

const toggleLoader = () => {
    document.querySelector('.container-form').classList.add('remove');
    document.querySelector('.animation').classList.add('animationAdd');
}

form.addEventListener('submit', validateInputs)
form.addEventListener('input', checkValidity)
form.querySelector('button').disabled = true;