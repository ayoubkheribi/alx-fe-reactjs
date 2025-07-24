import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      deleteRecipe(recipeId);
      if (onDelete) onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;