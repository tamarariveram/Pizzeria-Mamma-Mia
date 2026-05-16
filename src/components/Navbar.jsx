import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar">
      <Link to="/" className="navbar-home">🍕 Home</Link>

      <div className="navbar-buttons">
        {token ? (
          <>
            <Link to="/profile" className="navbar-btn">🔐 Profile</Link>
            <button className="navbar-btn">🔐 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-btn">🔐 Login</Link>
            <Link to="/register" className="navbar-btn">🔐 Register</Link>
          </>
        )}
      </div>

      <Link to="/cart" className="navbar-cart">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
    )
}

export default Navbar;