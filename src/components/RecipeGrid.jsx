import RecipeCard from './RecipeCard';
import './RecipeGrid.css';

function RecipeGrid({ recipes, favorites, onToggleFavorite }) {
  if (recipes.length === 0) {
    return (
      <div className="recipe-grid-empty">
        <p>😕 No recipes found</p>
        <span>Try searching for something else.</span>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;