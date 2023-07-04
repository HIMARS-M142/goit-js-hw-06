const allItemEl = document.querySelectorAll("ul#categories li.item");
const numberLengthEl = `Number of categories: ${allItemEl.length}`;

allItemEl.forEach((category) => {
  const titleEL = category.firstElementChild.textContent;
  const elementsEl = category.lastElementChild.children;

  console.log("Category:", titleEL);
  console.log("Elements:", elementsEl.length);
});
