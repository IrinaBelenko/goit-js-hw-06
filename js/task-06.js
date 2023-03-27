const textInput = document.querySelector("#validation-input");
const length = Number(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
  const currValue = event.currentTarget.value.length;
  if (currValue === length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
