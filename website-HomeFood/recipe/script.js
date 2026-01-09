const recipeWrapper = document.getElementById("recipe-wrapper");
const deleteBtn = document.getElementById("delete-btn");

const successWrapper = document.getElementById("succcess-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const buildScreen = async () => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes/${id}`
  );

  const recipe = await response.json();

  console.log(recipe);

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");

  const image = document.createElement("img");
  image.src = recipe.recipe_img;

  const card = document.createElement("div");
  card.classList.add("card");

  const cardTextWrapper = document.createElement("div");
  cardTextWrapper.classList.add("card-text-wrapper");

  const cardHeadingWrapper = document.createElement("div");
  cardHeadingWrapper.classList.add("card-heading-wrapper");

  const title = document.createElement("h2");
  title.innerText = recipe.title;
  title.classList.add("card-heading-title");

  const description = document.createElement("p");
  description.innerText = recipe.description;

  const cardIngredientsWrapper = document.createElement("div");

  const ingredientsHeading = document.createElement("h3");
  ingredientsHeading.innerText = "Ingredients:";

  const ingredients = document.createElement("p");
  ingredients.innerText = recipe.ingredients;

  const cardInstructionsWrapper = document.createElement("div");

  const instructionsHeading = document.createElement("h3");
  instructionsHeading.innerText = "Instructions:";

  const instructions = document.createElement("p");
  instructions.innerText = recipe.instructions;

  imgWrapper.append(image);
  cardHeadingWrapper.append(title, description);
  cardIngredientsWrapper.append(ingredientsHeading, ingredients);
  cardInstructionsWrapper.append(instructionsHeading, instructions);
  cardTextWrapper.append(cardIngredientsWrapper, cardInstructionsWrapper);
  card.append(cardHeadingWrapper, cardTextWrapper);
  recipeWrapper.append(imgWrapper, card);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes/${id}`,
    {
      method: "DELETE",
    }
  );

  const recipe = await response.json();

  if (recipe) {
    successWrapper.innerText = "The recipe is deteled";

    console.log(recipe);
    console.log(successWrapper.innerText);
  }

  setTimeout(() => {
    if (recipe) {
      window.location.replace("../index.html");
    }
  }, 2000);
});
