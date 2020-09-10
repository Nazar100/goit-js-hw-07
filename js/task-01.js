const lists = document.querySelectorAll(".item");

console.log(`В списке ${lists.length} категории.`);

const text = document.querySelectorAll("h2");

// for (let i = 0; i <= lists.length; i += 1) {
//   console.log(`Категория: ${text[i].textContent}
// Количество элементов: ${lists[i].lastElementChild.children.length}`);
// }

console.log(`Категория: ${text[0].textContent}
Количество элементов: ${lists[0].lastElementChild.children.length}`);
console.log(`Категория: ${text[1].textContent}
Количество элементов: ${lists[1].lastElementChild.children.length}`);
console.log(`Категория: ${text[2].textContent}
Количество элементов: ${lists[2].lastElementChild.children.length}`);

[...text].map((caption) => console.log(`Категория: ${caption.textContent}`));

[...lists].map((list) =>
  console.log(`Количество элементов: ${list.lastElementChild.children.length}`)
);
