import { useParams, useNavigate, Link } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

function EditRecipe({ recipes, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 24px' }}>
        <h2>Recipe Not Found</h2>
        <Link to="/">← Back to Recipes</Link>
      </div>
    );
  }

  const handleSubmit = (recipeData) => {
    onUpdate({ ...recipeData, id: recipe.id });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '32px' }}>Edit Recipe</h1>
      <RecipeForm initialData={recipe} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  );
}

export default EditRecipe;