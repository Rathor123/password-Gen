const numberset = "1234567890";
const upperCaseset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseset = "abcdefghijklmnopqrstuvwxyz";
const symbolsset = "!@$%^&*()+{}|?><,./*-+=_-";

let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let uppercase = document.querySelector("#Uppercase");
let lowerCase = document.querySelector("#lowerCase");
let btn = document.querySelector(".btn");
let password = document.querySelector(".password");
let totalchar = document.querySelector("#totalchar");
const random = (value) => {
  return value[Math.floor(Math.random() * value.length)];
};
let store;
function whatToAdd(store = "") {
  if (number.checked) {
    store += random(numberset);
  }
  if (symbol.checked) {
    store += random(symbolsset);
  }
  if (uppercase.checked) {
    store += random(upperCaseset);
  }
  if (lowerCase.checked) {
    store += random(lowerCaseset);
  }
  if (store.length < totalchar.value) {
    return whatToAdd(store);
  }
  if (store.length > totalchar.value) {
    store.substring(0, totalchar.value);
  }
  password.value = store;
}
btn.addEventListener("click", function () {
  whatToAdd();
});
