import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // 👈 ambos aquí

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-home">
        🍕 Home
      </Link>
      <Link to="/catalogo" className="navbar-btn">
        🍕 Catálogo
      </Link>

      <div className="navbar-buttons">
        {token ? (
          <>
            <Link to="/profile" className="navbar-btn">
              👤 Profile
            </Link>
            <button className="navbar-btn" onClick={logout}>
              🔐 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-btn">
              🔐 Login
            </Link>
            <Link to="/register" className="navbar-btn">
              📋 Register
            </Link>
          </>
        )}
      </div>

      <Link to="/cart" className="navbar-cart">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
}

export default Navbar;
