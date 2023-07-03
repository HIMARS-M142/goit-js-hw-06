const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const adds = ingredients.map((funct) => {
  const addLiEl = document.createElement("li");
  addLiEl.classList.add("item");
  addLiEl.textContent = funct;
  return addLiEl;
});
const itemEl = document.querySelector("#ingredients");
itemEl.append(...adds);
console.log(itemEl);
