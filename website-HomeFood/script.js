import { fetchAllRecipes } from "./utils/fetch.js";

const recipesWrapper = document.getElementById("recipes-wrapper");

const recipes = await fetchAllRecipes();

recipes.forEach((r) => {
  const card = document.createElement("a");
  card.classList.add("card");
  const link = `./recipe/index.html?id=${r.id}`;
  card.href = link;

  const image = document.createElement("img");
  image.src = r.recipe_img;

  // const cardTextWrapper = document.createElement("div");
  // cardTextWrapper.classList.add("card-text-wrapper");

  const cardHeadingWrapper = document.createElement("div");
  cardHeadingWrapper.classList.add("card-heading-wrapper");

  const title = document.createElement("h2");
  title.innerText = r.title;

  const description = document.createElement("p");
  description.innerText = r.description;

  const button = document.createElement("button");
  button.classList.add("card-button");
  button.innerText = "See complete recipe →";

  // const ingredientsHeading = document.createElement("h4");
  // ingredientsHeading.innerText = "Ingredients:";

  // const ingredients = document.createElement("p");
  // ingredients.innerText = r.ingredients;

  // const instructionsHeading = document.createElement("h4");
  // instructionsHeading.innerText = "Instructions:";

  // const instructions = document.createElement("p");
  // instructions.innerText = r.instructions;

  cardHeadingWrapper.append(title, description);
  // cardTextWrapper.append(
  //   cardHeadingWrapper,
  //   ingredientsHeading,
  //   ingredients,
  //   instructionsHeading,
  //   instructions
  // );
  // card.append(image, cardTextWrapper);
  card.append(image, cardHeadingWrapper, button);
  recipesWrapper.append(card);
});

console.log(recipes);
