import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Netflix Logo" />
        </Link>
      </div>
      {/* Add other navigation elements */}
    </nav>
  );
}

export default Navbar;
