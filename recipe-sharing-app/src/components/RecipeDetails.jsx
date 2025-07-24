import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import EditRecipe from "./EditRecipe";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
      {isEditing ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Edit Recipe</h2>
          <EditRecipe
            recipeId={recipeId}
            onDone={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
          <p className="text-gray-600 mb-4">{recipe.description}</p>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Edit
            </button>

            <DeleteRecipeButton
              recipeId={recipeId}
              onDelete={() => alert("Recipe deleted")} // or navigate away
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
