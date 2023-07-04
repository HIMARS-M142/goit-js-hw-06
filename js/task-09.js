function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener("click", () => {
  const bodyEl = document.querySelector("body");
  const spanEl = document.querySelector(".color");
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
});
