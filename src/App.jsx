import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CategoryFilter from './components/CategoryFilter';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import recipes from './data/recipes';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function Home({ favorites, onToggleFavorite }) {
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
  const [favorites, setFavorites] = useLocalStorage('cookora_favorites', []);

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
            <Route path="/recipe/:id" element={<RecipeDetail favorites={favorites} onToggleFavorite={toggleFavorite} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;