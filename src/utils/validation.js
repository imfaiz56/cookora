export function validateRecipeForm(formData) {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = 'Recipe name is required.';
  }

  if (!formData.category) {
    errors.category = 'Please select a category.';
  }

  if (!formData.image.trim()) {
    errors.image = 'Please enter a valid image URL.';
  }

  if (!formData.cookTime || formData.cookTime <= 0) {
    errors.cookTime = 'Please enter a valid cooking time.';
  }

  if (!formData.servings || formData.servings <= 0) {
    errors.servings = 'Please enter a valid number of servings.';
  }

  if (!formData.description.trim()) {
    errors.description = 'A short description is required.';
  }

  const validIngredients = formData.ingredients.filter((i) => i.trim() !== '');
  if (validIngredients.length === 0) {
    errors.ingredients = 'At least one ingredient is required.';
  }

  const validInstructions = formData.instructions.filter((i) => i.trim() !== '');
  if (validInstructions.length === 0) {
    errors.instructions = 'At least one instruction step is required.';
  }

  return errors;
}