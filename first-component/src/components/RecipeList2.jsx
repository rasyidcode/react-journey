/* eslint-disable react/prop-types */
import { recipes } from "../data";

export default function RecipeList() {
  return (
    <div>
      <h1>RecipeList</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
