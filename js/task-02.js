const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingridientsList = [];
ingredients.forEach((ingridient) => {
  const item = document.createElement("li");
  item.textContent = ingridient;
  ingridientsList.push(item);
});
const ingridientRef = document.querySelector("#ingredients");
console.log(ingridientRef);
ingridientRef.append(...ingridientsList);
