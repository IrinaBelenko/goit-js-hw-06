const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.classList.add("item");
  ingredientEL.textContent = ingredient;
  ingredientsEl.append(ingredientEL);
});
