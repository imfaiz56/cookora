import { useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

function AddRecipe({ onAdd }) {
  const navigate = useNavigate();

  const handleSubmit = (recipeData) => {
    const newId = onAdd(recipeData);
    navigate(`/recipe/${newId}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '32px' }}>Add New Recipe</h1>
      <RecipeForm onSubmit={handleSubmit} submitLabel="Add Recipe" />
    </div>
  );
}

export default AddRecipe;