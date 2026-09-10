import { Link } from 'react-router-dom';
import RecipeGrid from '../components/RecipeGrid';
import recipes from '../data/recipes';
import './Favorites.css';

function Favorites({ favorites, onToggleFavorite }) {
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-empty">
        <p>❤️</p>
        <h2>No favorite recipes yet.</h2>
        <span>Start exploring recipes and save your favorites!</span>
        <Link to="/" className="favorites-empty-link">Explore Recipes</Link>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">My Favorite Recipes</h1>
      <RecipeGrid
        recipes={favoriteRecipes}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

export default Favorites;