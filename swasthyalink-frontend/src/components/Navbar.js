import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this for styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SwasthyaLink</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
