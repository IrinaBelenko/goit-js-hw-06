const controlInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controlInput.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});