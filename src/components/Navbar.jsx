import { Link, NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import './Navbar.css';

function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍳 Cookora
        </Link>

        <div className="navbar-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/favorites" className="nav-link">
            Favorites
          </NavLink>
          <button
            className="theme-toggle-btn"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <NavLink to="/add-recipe" className="navbar-btn">
            + Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;