import React, { useState } from 'react';
import './Auth.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, getDashboardRouteByRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated backend logic
    let role = '';
    if (email.includes('patient')) role = 'Patient';
    else if (email.includes('doctor')) role = 'Doctor';
    else if (email.includes('clinic')) role = 'Clinic';
    else {
      alert('Invalid email or role not recognized');
      return;
    }

    const user = { email, role };
    login(user);

    const dashboardPath = getDashboardRouteByRole(role);
    navigate(dashboardPath);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
