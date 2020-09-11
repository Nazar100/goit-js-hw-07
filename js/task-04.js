// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерф
const counterValue = document.querySelector('#value');

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
