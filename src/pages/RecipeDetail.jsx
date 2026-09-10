import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';
import './RecipeDetail.css';

function RecipeDetail({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">← Back to Recipes</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-image-wrapper">
        <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      </div>

      <div className="recipe-detail-content">
        <span className="recipe-detail-category">{recipe.category}</span>
        <h1 className="recipe-detail-title">{recipe.title}</h1>
        <p className="recipe-detail-desc">{recipe.description}</p>

        <div className="recipe-detail-meta">
          <span>⭐ {recipe.rating}</span>
          <span>⏱ {recipe.cookTime} min</span>
          <span>👥 {recipe.servings} servings</span>
          <span>🏷 {recipe.difficulty}</span>
        </div>

        <button
          className="favorite-toggle-btn"
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>

        <div className="recipe-detail-sections">
          <div className="recipe-detail-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" /> {ing}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-detail-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <Link to="/" className="back-link">← Back to Recipes</Link>
      </div>
    </div>
  );
}

export default RecipeDetail;