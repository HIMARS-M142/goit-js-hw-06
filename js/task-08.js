const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
    return alert("Заповни поля!!!");
  }
  const formData = new FormData(event.currentTarget);
  const formObject = formData.forEach((value, name) => {
    console.log(name, ":", value);
  });
});
