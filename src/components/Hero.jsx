import './Hero.css';

function Hero({ searchTerm, onSearchChange }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Good food starts with a good recipe.</h1>
        <p className="hero-subtitle">
          Discover delicious recipes, explore new flavors, and make every meal special.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="🔍 Search for recipes, ingredients..."
            className="hero-search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;