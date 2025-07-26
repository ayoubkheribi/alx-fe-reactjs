import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] }), false, "addRecipe"),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    }), false, "deleteRecipe"),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }), false, "updateRecipe"),

  setRecipes: (recipes) =>
    set({ recipes }, false, "setRecipes"),

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, "setSearchTerm");
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered }, false, "filterRecipes");
  }
}));
