const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const newIngredients = ingredients.map((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.classList.add("item");
  ingredientEL.textContent = ingredient;
  return ingredientEL;
});

ingredientsEl.append(...newIngredients);
