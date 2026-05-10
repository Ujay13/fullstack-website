
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar({ setNavOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login token
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newValue = !prev;
      if (setNavOpen) setNavOpen(newValue);
      return newValue;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (setNavOpen) setNavOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    closeMenu();
    navigate('/login');
  };

  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-sm">
        <div className="navbar-brand">
          <h4>Food Recipe Sharing</h4>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ background: 'transparent', border: 'none', padding: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="white"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? 'show' : ''
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item" onClick={closeMenu}>
              <Link to="/Home" className="nav-link-custom">
                Home
              </Link>
            </li>

            <li className="nav-item" onClick={closeMenu}>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="logout-btn no-underline"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="nav-link-custom">
                  Login
                </Link>
              )}
            </li>

            <li className="nav-item" onClick={closeMenu}>
              <Link to="/Profile" className="nav-link-custom">
                Profile
              </Link>
            </li>

            <li className="nav-item" onClick={closeMenu}>
              <Link to="/MyRecipe" className="nav-link-custom">
                MyRecipe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


