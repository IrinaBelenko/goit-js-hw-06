const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.map((ingredient) => {
  const ingredientsEl = document.querySelector("#ingredients");
  const ingredientEL = document.createElement("li");
  ingredientEL.classList.add("item");
  ingredientEL.textContent = ingredient;
  ingredientsEl.append(ingredientEL);
});
