import React, { useState } from 'react';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔁 For now: Simulate fetching user's role based on email (mock logic)
    // ✅ Later: This logic will be replaced by backend call
    if (email.includes('patient')) {
      window.location.href = '/patient-dashboard';
    } else if (email.includes('doctor')) {
      window.location.href = '/doctor-dashboard';
    } else if (email.includes('clinic')) {
      window.location.href = '/clinic-dashboard';
    } else {
      alert('User not found or role not detected. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
