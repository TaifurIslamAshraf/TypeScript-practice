const userForm = document.querySelector("form") as HTMLFormElement;
console.log(userForm);

const userName = document.querySelector("#name") as HTMLInputElement;

userForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const data = {
    username: userName.value,
  };
  userName.value = "";
  console.log(data);
});
