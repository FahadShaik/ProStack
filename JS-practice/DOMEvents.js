const pTag = document.getElementById("input-setter");
const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const buttonThree = document.getElementById("button-3");
const buttonFour = document.getElementById("button-4");
const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");

pTag.innerHTML = "First document insertion via Js";

function mouseHandler(button) {
  button.style.backgroundColor = "green";
}

function inputOneHandler() {
  inputOne.style.backgroundColor = "#d7c7c7";
}

function inputTwoHandler() {
  let userInput = inputTwo.value;
  inputTwo.value = userInput.toUpperCase();
}
