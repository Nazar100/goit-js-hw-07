const inputRef = document.querySelector('#validation-input');

const checkValidation = event => {
    if (event.target.value.length === 6) {
        console.log('Норм');
    } else {
        console.log('nenorm');
    }
};
console.log(checkValidation());
