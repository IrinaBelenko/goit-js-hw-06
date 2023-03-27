const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function isEmpty(str) {
  return str.trim() == "";
}

//const isEmpty = (str) => str.trim() == "";

textInput.addEventListener("input", (event) => {
  let valueInput = event.currentTarget.value;

  if (isEmpty(valueInput)) {
    valueInput = "Anonymous";
  }

  output.textContent = valueInput;
});
