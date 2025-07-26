import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe CRUD
  addRecipe: (recipe) =>
    set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) })),
  updateRecipe: (updated) =>
    set(state => ({
      recipes: state.recipes.map(r => r.id === updated.id ? updated : r)
    })),

  // Search
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Favorites
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])]
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Generate Recommendations (randomly for now)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      r => favorites.includes(r.id) && Math.random() > 0.3
    );
    set({ recommendations: recommended });
  },
}));
