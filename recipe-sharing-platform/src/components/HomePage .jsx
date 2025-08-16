import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div>
      <h1>Recipe Sharing Platform</h1>
      <ul>
        {recipes.map((recipe, id) => (
          <li key={id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;