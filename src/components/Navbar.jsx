import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import './Navbar.css';

function Navbar() {
  const [isDark, setIsDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          🍳 Cookora
        </Link>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>
            Favorites
          </NavLink>
          <button
            className="theme-toggle-btn"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <NavLink to="/add-recipe" className="navbar-btn" onClick={() => setMenuOpen(false)}>
            + Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;