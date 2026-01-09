const recipesWrapper = document.getElementById("recipes-wrapper");

const buildScreen = async () => {
  const response = await fetch(
    "https://695e10332556fd22f6772f85.mockapi.io/recipes"
  );

  const recipes = await response.json();

  recipes.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = r.recipe_img;

    const cardTextWrapper = document.createElement("div");
    cardTextWrapper.classList.add("card-text-wrapper");

    const cardHeadingWrapper = document.createElement("div");
    cardHeadingWrapper.classList.add("card-heading-wrapper");

    const title = document.createElement("h2");
    title.innerText = r.title;

    const description = document.createElement("p");
    description.innerText = r.description;

    const ingredientsHeading = document.createElement("h4");
    ingredientsHeading.innerText = "Ingredients:";

    const ingredients = document.createElement("p");
    ingredients.innerText = r.ingredients;

    const instructionsHeading = document.createElement("h4");
    instructionsHeading.innerText = "Instructions:";

    const instructions = document.createElement("p");
    instructions.innerText = r.instructions;

    cardHeadingWrapper.append(title, description);
    cardTextWrapper.append(
      cardHeadingWrapper,
      ingredientsHeading,
      ingredients,
      instructionsHeading,
      instructions
    );
    card.append(image, cardTextWrapper);
    recipesWrapper.append(card);
  });

  console.log(recipes);
};

buildScreen();
