import './Navbar.css';

function Navbar() {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar">
            <button>🍕 Home</button>

            <div className="navbar-buttons">
                {token ? (
                    <>
                        <button>🔒 Profile</button>
                        <button>🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <button>🔐 Login</button>
                        <button>🔐 Register</button>
                    </>
                )}
            </div>

            <button className="navbar-cart">🛒 Total: ${total.toLocaleString()}</button>
        </nav>
    )
}

export default Navbar;