import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CategoryFilter from './components/CategoryFilter';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import Toast from './components/Toast';
import defaultRecipes from './data/recipes';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import NotFound from './pages/NotFound';

function Home({ recipes, favorites, onToggleFavorite }) {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <RecipeGrid recipes={filteredRecipes} favorites={favorites} onToggleFavorite={onToggleFavorite} isLoading={isLoading} />
    </>
  );
}

function App() {
  const [recipes, setRecipes] = useLocalStorage('cookora_recipes', defaultRecipes);
  const [favorites, setFavorites] = useLocalStorage('cookora_favorites', []);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
  };

  const toggleFavorite = (recipeId) => {
    const isCurrentlyFavorite = favorites.includes(recipeId);
    setFavorites((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
    showToast(isCurrentlyFavorite ? 'Removed from favorites' : 'Added to favorites!');
  };

  const addRecipe = (newRecipe) => {
    const newId = recipes.length > 0 ? Math.max(...recipes.map((r) => r.id)) + 1 : 1;
    setRecipes([...recipes, { ...newRecipe, id: newId }]);
    showToast('Recipe added successfully!');
    return newId;
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)));
    showToast('Recipe updated successfully!');
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((r) => r.id !== recipeId));
    setFavorites(favorites.filter((id) => id !== recipeId));
    showToast('Recipe deleted.');
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;