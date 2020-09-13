const counterValue = document.querySelector('#value');

Number(counterValue.textContent);

const subtractValue = () => {
    counterValue.textContent -= 1;
};
const addValue = () => {
    counterValue.textContent++;
};

const decrementValue = document.querySelector(
    'button[data-action="decrement"]',
);
const incrementValue = document.querySelector(
    'button[data-action="increment"]',
);
decrementValue.addEventListener('click', subtractValue);
incrementValue.addEventListener('click', addValue);
