import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav id="nav1" className="navbar navbar-expand-sm" style={{ color: 'white' }}>
        <div className="navbar-brand">
          <h4>Food Recipe Sharing</h4>
        </div>

        <button
          className="navbar-toggler navbutton"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          {/* Smaller white hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>

        <div className={`collapse navbar-collapse mr-auto ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;