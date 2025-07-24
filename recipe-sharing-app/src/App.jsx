import React from 'react'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

const App = () => {
  return (
    <div>
      <RecipeList/>
      <AddRecipeForm/>
      <RecipeDetails>
        <EditRecipe />
        <DeleteRecipeButton />
      </RecipeDetails>

    </div>
  )
}

export default App;