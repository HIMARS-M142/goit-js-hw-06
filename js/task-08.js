const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
    return alert("Заповни поля!!!");
  }

  const formObject = {
    mail: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  console.log(formObject);
  if (SubmitEvent) {
    event.currentTarget.email.value = "";
    event.currentTarget.password.value = "";
  }
});
