import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recommendations = useRecipeStore(state => state.recommendations);

  useEffect(() => {
    generateRecommendations(); // generate when component loads
  }, [generateRecommendations]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">✨ Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul className="space-y-2">
          {recommendations.map(recipe => (
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

export default RecommendationsList;
