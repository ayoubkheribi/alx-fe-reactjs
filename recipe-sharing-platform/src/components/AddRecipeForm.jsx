import { useState } from "react";

export const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Instructions are required.";

    if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients, separated by commas.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps
        .split(".")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted! Check console for data.");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.title ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.ingredients ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="e.g., 2 eggs, 1 cup milk, 1 tbsp sugar"
            rows={4}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Preparation Steps (period separated)</label>
          <textarea
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 rounded bg-gray-700 border ${
              errors.steps ? "border-red-500" : "border-gray-600"
            }`}
            placeholder="e.g., Mix eggs with sugar. Bake at 180°C for 20 minutes."
            rows={5}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 transition-colors px-6 py-2 rounded font-semibold"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;