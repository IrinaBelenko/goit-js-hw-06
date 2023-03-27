let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

const decrementValue = () => {
  counterValue = counterValue + Number(decrementBtn.textContent);
  valueEl.textContent = counterValue;
};

const incrementValue = () => {
  counterValue = counterValue + Number(incrementBtn.textContent);
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);