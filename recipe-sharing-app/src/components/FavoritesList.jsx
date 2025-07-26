import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">❤️ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="space-y-2">
          {favoriteRecipes.map(recipe => (
            <li key={recipe.id} className="border p-3 bg-white rounded shadow-sm">
              <Link to={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline">
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
