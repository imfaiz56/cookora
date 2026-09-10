import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
          <NavLink to="/add-recipe" className="navbar-btn">
            + Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;