const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  console.log(event.currentTarget.value.length);

  refs.output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    return (refs.output.textContent = "Anonymous");
  }
});
