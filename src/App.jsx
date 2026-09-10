import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CategoryFilter from './components/CategoryFilter';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import defaultRecipes from './data/recipes';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function Home({ recipes, favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <RecipeGrid recipes={filteredRecipes} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </>
  );
}

function App() {
  const [recipes, setRecipes] = useLocalStorage('cookora_recipes', defaultRecipes);
  const [favorites, setFavorites] = useLocalStorage('cookora_favorites', []);

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const addRecipe = (newRecipe) => {
    const newId = recipes.length > 0 ? Math.max(...recipes.map((r) => r.id)) + 1 : 1;
    setRecipes([...recipes, { ...newRecipe, id: newId }]);
    return newId;
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)));
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((r) => r.id !== recipeId));
    setFavorites(favorites.filter((id) => id !== recipeId));
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home recipes={recipes} favorites={favorites} onToggleFavorite={toggleFavorite} />} />
            <Route
              path="/recipe/:id"
              element={
                <RecipeDetail
                  recipes={recipes}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onDelete={deleteRecipe}
                />
              }
            />
            <Route path="/favorites" element={<Favorites recipes={recipes} favorites={favorites} onToggleFavorite={toggleFavorite} />} />
            <Route path="/add-recipe" element={<AddRecipe onAdd={addRecipe} />} />
            <Route path="/edit-recipe/:id" element={<EditRecipe recipes={recipes} onUpdate={updateRecipe} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;