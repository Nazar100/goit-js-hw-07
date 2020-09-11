const inputRef = document.querySelector('#validation-input');

const checkValidation = event => {
    if (event.target.value.length === Number(event.target.dataset.length)) {
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        }
        inputRef.classList.add('valid');
    } else {
        if (inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid');
        }
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
};

inputRef.addEventListener('change', checkValidation);
