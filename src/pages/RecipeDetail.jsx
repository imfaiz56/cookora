import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './RecipeDetail.css';

function RecipeDetail({ recipes, favorites, onToggleFavorite, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
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

  const handleDelete = () => {
    onDelete(recipe.id);
    navigate('/');
  };

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

        <div className="recipe-detail-actions">
          <button className="favorite-toggle-btn" onClick={() => onToggleFavorite(recipe.id)}>
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
          <Link to={`/edit-recipe/${recipe.id}`} className="edit-btn">✏️ Edit</Link>
          <button className="delete-btn" onClick={() => setShowConfirm(true)}>🗑 Delete</button>
        </div>

        {showConfirm && (
          <div className="confirm-box">
            <p>Are you sure you want to delete this recipe?</p>
            <div className="confirm-actions">
              <button onClick={() => setShowConfirm(false)} className="cancel-btn">Cancel</button>
              <button onClick={handleDelete} className="confirm-delete-btn">Delete</button>
            </div>
          </div>
        )}

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