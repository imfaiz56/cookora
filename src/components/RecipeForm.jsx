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

      <div className="form-section">
        <h3 className="form-section-title">🍽 Basic Details</h3>

        <div className="form-group">
          <label htmlFor="recipe-title">Recipe Name</label>
          <input
            id="recipe-title"
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="e.g. Creamy Garlic Pasta"
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="recipe-category">Category</label>
            <select
              id="recipe-category"
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
            <label htmlFor="recipe-difficulty">Difficulty</label>
            <select
              id="recipe-difficulty"
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
          <label htmlFor="recipe-image">Image URL</label>
          <input
            id="recipe-image"
            type="text"
            value={formData.image}
            onChange={(e) => handleChange('image', e.target.value)}
            placeholder="https://..."
          />
          {errors.image && <span className="form-error">{errors.image}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="recipe-description">Description</label>
          <textarea
            id="recipe-description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            placeholder="A short, tasty description of your recipe..."
          />
          {errors.description && <span className="form-error">{errors.description}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="recipe-cooktime">Cooking Time (min)</label>
            <input
              id="recipe-cooktime"
              type="number"
              value={formData.cookTime}
              onChange={(e) => handleChange('cookTime', e.target.value)}
              placeholder="30"
            />
            {errors.cookTime && <span className="form-error">{errors.cookTime}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="recipe-servings">Servings</label>
            <input
              id="recipe-servings"
              type="number"
              value={formData.servings}
              onChange={(e) => handleChange('servings', e.target.value)}
              placeholder="4"
            />
            {errors.servings && <span className="form-error">{errors.servings}</span>}
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="form-section-title">🥕 Ingredients</h3>
        {formData.ingredients.map((ing, index) => (
          <div className="list-input-row" key={index}>
            <span className="list-index">{index + 1}</span>
            <input
              type="text"
              value={ing}
              onChange={(e) => handleListChange('ingredients', index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
              aria-label={`Ingredient ${index + 1}`}
            />
            {formData.ingredients.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeListItem('ingredients', index)}
                aria-label={`Remove ingredient ${index + 1}`}
              >✕</button>
            )}
          </div>
        ))}
        <button type="button" className="add-item-btn" onClick={() => addListItem('ingredients')}>
          + Add Ingredient
        </button>
        {errors.ingredients && <span className="form-error">{errors.ingredients}</span>}
      </div>

      <div className="form-section">
        <h3 className="form-section-title">📋 Instructions</h3>
        {formData.instructions.map((step, index) => (
          <div className="list-input-row" key={index}>
            <span className="list-index">{index + 1}</span>
            <input
              type="text"
              value={step}
              onChange={(e) => handleListChange('instructions', index, e.target.value)}
              placeholder={`Step ${index + 1}`}
              aria-label={`Step ${index + 1}`}
            />
            {formData.instructions.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeListItem('instructions', index)}
                aria-label={`Remove step ${index + 1}`}
              >✕</button>
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