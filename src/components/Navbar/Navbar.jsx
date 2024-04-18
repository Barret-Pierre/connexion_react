import { Link, useLocation } from "react-router-dom";
import "./Navbar.modules.scss";
import PropTypes from "prop-types";

Navbar.propTypes = {
  onLogout: PropTypes.func,
};

function Navbar({ onLogout }) {
  const location = useLocation();
  const user = localStorage.getItem("userEmail");
  const logout = () => {
    localStorage.removeItem("userEmail");
    onLogout();
  };

  return (
    <nav>
      <a href="/" className="brand">
        <img src="./vite.svg" alt="Brand logo" />
        <span className="brand-name">React Learn</span>
      </a>
      <ul className="menu">
        {user ? (
          <li className="menu-item">
            <button onClick={logout} className="menu-item-content">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="menu-item">
              <Link
                to="/login"
                className={`menu-item-content ${
                  location.pathname === "/login" && "active"
                }`}
              >
                Login
                {location.pathname === "/login" && (
                  <span className="underline"> </span>
                )}
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/signup"
                className={`menu-item-content ${
                  location.pathname === "/signup" && "active"
                }`}
              >
                Signup
                {location.pathname === "/signup" && (
                  <span className="underline"> </span>
                )}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
