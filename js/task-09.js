function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(".color");

const changeColor = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = bodyEl.style.backgroundColor;
};

changeColorBtn.addEventListener("click", changeColor);
