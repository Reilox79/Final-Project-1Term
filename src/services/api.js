const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// List of meals whose name starts with a letter
// GET /search.php?f=a
export async function getMealsByLetter(letter) {
  const response = await fetch(`${BASE_URL}/search.php?f=${letter}`);
  if (!response.ok) throw new Error("Error fetching meals");

  const data = await response.json();
  // If there are no meals, the API returns { meals: null }
  return data.meals || [];
}

// One meal by its id
// GET /lookup.php?i=52772
export async function getMealById(id) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!response.ok) throw new Error("Error fetching meal");

  const data = await response.json();
  if (!data.meals) throw new Error("Meal not found");

  const meal = data.meals[0];

  // The API gives the ingredients in 20 separate fields
  // (strIngredient1...strIngredient20), so we join them in one array
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (name && name.trim() !== "") {
      ingredients.push({ name, measure });
    }
  }

  return { ...meal, ingredients };
}
