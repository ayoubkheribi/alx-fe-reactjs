import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList'
import SearchBar from "./components/SearchBar";

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    setRecipes([
      {
        id: "1",
        title: "Tacos",
        description: "Delicious Mexican street food"
      },
      {
        id: "2",
        title: "Pizza",
        description: "Cheesy Italian classic"
      }
    ]);
  }, []);

  const recipes = useRecipeStore(state => state.recipes);

  return (
    <Router>
      <div>
        <h1>🍽️ Recipe App</h1>
        <Routes>
          <Route
            path="/"
            element={
                <><AddRecipeForm /><SearchBar /><RecipeList /></>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
