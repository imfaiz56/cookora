import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-image-wrapper">
        <img src={recipe.image} alt={recipe.title} className="recipe-card-image" />
        <span className="recipe-card-category">{recipe.category}</span>
      </div>

      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-desc">{recipe.description}</p>

        <div className="recipe-card-meta">
          <span>⭐ {recipe.rating}</span>
          <span>⏱ {recipe.cookTime} min</span>
        </div>

        <Link to={`/recipe/${recipe.id}`} className="recipe-card-btn">
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;