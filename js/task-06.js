let input = document.getElementById("validation-input");
const datalength = Number(input.dataset.length);
input.addEventListener("blur", () => {
  const inputlength = input.value.length;
  if (inputlength === datalength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
