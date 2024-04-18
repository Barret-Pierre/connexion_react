import { Link } from "react-router-dom";
import "./Navbar.modules.scss";
import PropTypes from "prop-types";

Navbar.propTypes = {
  onLogout: PropTypes.func,
};

function Navbar({ onLogout }) {
  const user = localStorage.getItem("userEmail");
  const logout = () => {
    localStorage.removeItem("userEmail");
    onLogout();
  };
  return (
    <nav>
      <ul>
        {user ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
