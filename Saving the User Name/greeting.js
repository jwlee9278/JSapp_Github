const form = document.querySelector(".form"),
  input = form.querySelector("input");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  greeting = document.querySelector(".greetings");

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault;
  const currentValue = input.value;
  saveName(currentValue);
  paintName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintName(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `HELLO ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  loadName();
}

init();
