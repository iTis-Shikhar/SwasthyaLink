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
<div className="navbar-logo">
<Link to="/">SwasthyaLink</Link>
</div>

  <ul className="navbar-links">
    <li><Link to="/">Home</Link></li>
    {!user && <li><Link to="/login">Login</Link></li>}
    {!user && <li><Link to="/register">Register</Link></li>}
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/help">Help</Link></li>
    {user && <li><Link to={`/${user.role}-dashboard`}>Dashboard</Link></li>}
    {user && (
      <li>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </li>
    )}
  </ul>
</nav>
);
}
export default Navbar;