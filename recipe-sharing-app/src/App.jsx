import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

function App() {
  return (
    <Router>
      <div className="p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">🍽️ Recipe App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
