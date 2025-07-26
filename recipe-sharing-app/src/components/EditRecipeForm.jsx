import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipeId, onDone }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    if (onDone) onDone();
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
