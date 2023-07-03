const valueEl = document.querySelector("#value");
const buttonsEL = document.querySelectorAll("#counter button");
const removeButtonClick = buttonsEL[0];
const addButtonClick = buttonsEL[1];
let counterValue = 0;
addButtonClick.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});
removeButtonClick.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
