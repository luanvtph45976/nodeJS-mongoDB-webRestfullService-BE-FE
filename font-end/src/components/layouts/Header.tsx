import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <FaHome /> Home
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-text">Welcome, {user?.email}</span>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="nav-link button">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
              {user.role === "admin" && (
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    <FaUserShield /> Admin
                  </Link>
                </li>
              )}
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <FaUserPlus /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
