const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.querySelector("button");
const small = document.querySelectorAll("small");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (username.value != "" && password.value != "") {
    alert(`hello ${username.value}`);
  } else {
    [...small].map((eachEl) => (eachEl.style.visibility = "visible"));
  }
});
