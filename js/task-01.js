const allItemEl = document.querySelectorAll("ul#categories li.item");
const numberLengthEl = `Number of categories: ${allItemEl.length}`;
console.log(numberLengthEl);

allItemEl.forEach((category) => {
  const titleEL = category.querySelector("h2").textContent;
  const elementsEl = category.querySelectorAll(" ul li");

  console.log("Category:", titleEL);
  console.log("Elements:", elementsEl.length);
});
