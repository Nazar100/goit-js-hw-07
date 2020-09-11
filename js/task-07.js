const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

inputRef.min = 1;
inputRef.max = 5;
inputRef.addEventListener('input', event => {
    console.log(event.target.value);
    if (Number(event.target.value) === 1) {
        textRef.style.fontSize = '10px';
    }
    if (Number(event.target.value) === 2) {
        textRef.style.fontSize = '20px';
    }
    if (Number(event.target.value) === 3) {
        textRef.style.fontSize = '30px';
    }
    if (Number(event.target.value) === 4) {
        textRef.style.fontSize = '40px';
    }
    if (Number(event.target.value) === 5) {
        textRef.style.fontSize = '50px';
    }
});
