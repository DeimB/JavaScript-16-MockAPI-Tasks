export const fetchAllRecipes = async () => {
  const response = await fetch(
    "https://695e10332556fd22f6772f85.mockapi.io/recipes"
  );

  const recipes = await response.json();

  return recipes;
};

export const insertNewRecipe = async (recipe) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes`,
    {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: { "Content-Type": "application/json" },
    }
  );
  const recipeRes = await response.json();

  return recipeRes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes/${id}`
  );

  const recipe = await response.json();
  return recipe;
};

export const deleteRecipeById = async (id) => {
  const response = await fetch(
    `https://695e10332556fd22f6772f85.mockapi.io/recipes/${id}`,
    {
      method: "DELETE",
    }
  );

  const recipe = await response.json();
  return recipe;
};
