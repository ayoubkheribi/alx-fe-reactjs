import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; 

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); 
  }, []);

  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2 ">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          className="block h-full"
          key={recipe.id}
        >
          <div className="max-w-sm mx-auto bg-gray-800 p-4 rounded-lg shadow flex flex-col h-full">
            <h2 className="text-center mb-2">{recipe.title}</h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="mb-2 w-36 h-36 object-cover rounded-full mx-auto bg-white overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;