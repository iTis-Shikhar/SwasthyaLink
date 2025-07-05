import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">SwasthyaLink</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/register">Register</Link></li>}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/help">Help</Link></li>
        {user && <li><Link to={`/${user.role}-dashboard`}>Dashboard</Link></li>}
        {user && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
