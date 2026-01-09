import { insertNewRecipe } from "../utils/fetch.js";

const sumbitBtn = document.getElementById("submit-btn");
const successWrapper = document.getElementById("succcess-message");
const errorWrapper = document.getElementById("error-message");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const instructionsInput = document.getElementById("instructions");
const ingredientsInput = document.getElementById("ingredients");
const imageUrlInput = document.getElementById("img-url");

sumbitBtn.addEventListener("click", async () => {
  if (
    titleInput.value.trim() === "" ||
    descriptionInput.value.trim() === "" ||
    instructionsInput.value.trim() === "" ||
    imageUrlInput.value.trim() === ""
  ) {
    console.log("All fields must be filled in");
    errorWrapper.innerText = "All fields must be filled in";

    return;
  }

  errorWrapper.textContent = "";

  const recipe = {
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    instructions: instructionsInput.value.trim(),
    ingredients: ingredientsInput.value.trim(),
    recipe_img: imageUrlInput.value.trim(),
  };

  console.log(recipe);

  const recipeRes = await insertNewRecipe(recipe);

  if (recipeRes) {
    successWrapper.innerText = "New recipe is inserted!";

    console.log(successWrapper.innerText);
  }

  setTimeout(() => {
    if (recipeRes) {
      window.location.replace("../index.html");
    }
  }, 3000);
});
