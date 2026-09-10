import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>🍳 Cookora</h3>
          <p>Delicious recipes made simple.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/">Recipes</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <span>Breakfast</span>
          <span>Lunch</span>
          <span>Dinner</span>
          <span>Dessert</span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Cookora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;