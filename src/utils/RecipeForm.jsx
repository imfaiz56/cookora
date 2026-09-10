import { useState } from 'react';
import { validateRecipeForm } from '../utils/validation';
import './RecipeForm.css';

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];

function RecipeForm({ initialData, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      category: '',
      image: '',
      description: '',
      cookTime: '',
      servings: '',
      difficulty: 'Easy',
      rating: 4.5,
      ingredients: [''],
      instructions: [''],
    }
  );
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleListChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addListItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeListItem = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRecipeForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const cleanedData = {
        ...formData,
        cookTime: Number(formData.cookTime),
        servings: Number(formData.servings),
        ingredients: formData.ingredients.filter((i) => i.trim() !== ''),
        instructions: formData.instructions.filter((i) => i.trim() !== ''),
      };
      onSubmit(cleanedData);
    }
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Recipe Name</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        {errors.title && <span className="form-error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <span className="form-error">{errors.category}</span>}
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => handleChange('image', e.target.value)}
          placeholder="https://..."
        />
        {errors.image && <span className="form-error">{errors.image}</span>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={3}
        />
        {errors.description && <span className="form-error">{errors.description}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cooking Time (min)</label>
          <input
            type="number"
            value={formData.cookTime}
            onChange={(e) => handleChange('cookTime', e.target.value)}
          />
          {errors.cookTime && <span className="form-error">{errors.cookTime}</span>}
        </div>

        <div className="form-group">
          <label>Servings</label>
          <input
            type="number"
            value={formData.servings}
            onChange={(e) => handleChange('servings', e.target.value)}
          />
          {errors.servings && <span className="form-error">{errors.servings}</span>}
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select
            value={formData.difficulty}
            onChange={(e) => handleChange('difficulty', e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Ingredients</label>
        {formData.ingredients.map((ing, index) => (
          <div className="list-input-row" key={index}>
            <input
              type="text"
              value={ing}
              onChange={(e) => handleListChange('ingredients', index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
            />
            {formData.ingredients.length > 1 && (
              <button type="button" onClick={() => removeListItem('ingredients', index)}>✕</button>
            )}
          </div>
        ))}
        <button type="button" className="add-item-btn" onClick={() => addListItem('ingredients')}>
          + Add Ingredient
        </button>
        {errors.ingredients && <span className="form-error">{errors.ingredients}</span>}
      </div>

      <div className="form-group">
        <label>Instructions</label>
        {formData.instructions.map((step, index) => (
          <div className="list-input-row" key={index}>
            <input
              type="text"
              value={step}
              onChange={(e) => handleListChange('instructions', index, e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
            {formData.instructions.length > 1 && (
              <button type="button" onClick={() => removeListItem('instructions', index)}>✕</button>
            )}
          </div>
        ))}
        <button type="button" className="add-item-btn" onClick={() => addListItem('instructions')}>
          + Add Step
        </button>
        {errors.instructions && <span className="form-error">{errors.instructions}</span>}
      </div>

      <button type="submit" className="form-submit-btn">{submitLabel}</button>
    </form>
  );
}

export default RecipeForm;