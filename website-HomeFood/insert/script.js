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

  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes`,
    {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: { "Content-Type": "application/json" },
    }
  );
  const recipeRes = await response.json();

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
