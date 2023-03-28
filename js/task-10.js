const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", create);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + 10 * (i - 1);
    const divEL = document.createElement("div");
    divEL.style.width = `${size}px`;
    divEL.style.height = `${size}px`;
    divEL.style.backgroundColor = getRandomHexColor();

    boxesEl.append(divEL);
  }
}

function create() {
  const inputValue = document.querySelector("input").value;
  console.log(inputValue);
  const amount = Number(inputValue);
  createBoxes(amount);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
