import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No matching recipes found.</p>;
  }

  return (
    <ul className="space-y-3">
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id} className="border p-3 rounded shadow-sm bg-white">
          <Link to={`/recipes/${recipe.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
            {recipe.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
