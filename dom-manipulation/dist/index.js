"use strict";
const userForm = document.querySelector("form");
console.log(userForm);
const userName = document.querySelector("#name");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        username: userName.value,
    };
    userName.value = "";
    console.log(data);
});
