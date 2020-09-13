const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

inputRef.min = 1;
inputRef.max = 10;

inputRef.addEventListener('input', event => {
    for (let i = 1; i <= inputRef.max; i += 1) {
        if (Number(event.target.value) === i) {
            textRef.style.fontSize = `${i * 10}px`;
        }
    }
});
