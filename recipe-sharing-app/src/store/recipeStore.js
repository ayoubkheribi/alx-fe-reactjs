import {create} from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe:(id) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id !== id)})),
  updateRecipe: (updateRecipe) => set(state => ({recipes: state.recipe.map(recipe => recipe.id === id ? updateRecipe : recipe)})),
  setRecipes: (recipes) => set({ recipes })
}));
