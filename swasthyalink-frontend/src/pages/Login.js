import React, { useState } from 'react';
import './Auth.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🚧 Later replace this with real backend logic
    let role = '';
    if (email.includes('patient')) role = 'patient';
    else if (email.includes('doctor')) role = 'doctor';
    else if (email.includes('clinic')) role = 'clinic';
    else {
      alert('Invalid credentials');
      return;
    }

    login({ email, role });

    // Redirect based on role
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
