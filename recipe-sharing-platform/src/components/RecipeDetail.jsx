import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    import("../data.json")
      .then((module) => {
        const found = module.default.find((r) => String(r.id) === id);
        setRecipe(found || null);
      })
      .catch((err) => console.error("Failed to load recipes:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-400 mt-10">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-gray-800 text-3xl font-bold text-center mb-6">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="mb-2 w-36 h-36 object-cover rounded-full mx-auto bg-white overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      />
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{recipe.summary}</p>

      <div className="bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
        <h2 className="text-xl font-semibold text-white mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold text-white mb-3">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}