import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
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
          />
        </div>

        <Link to="/" className="hero-btn">
          Explore Recipes
        </Link>
      </div>
    </section>
  );
}

export default Hero;