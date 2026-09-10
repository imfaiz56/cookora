import './CategoryFilter.css';

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;