import React, { useState } from 'react';
import './Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Patient');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // 🚀 Later: Add real register logic here
    if (role === 'Patient') {
      window.location.href = '/patient-dashboard';
    } else if (role === 'Doctor') {
      window.location.href = '/doctor-dashboard';
    } else {
      window.location.href = '/clinic-dashboard';
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="Patient">Patient</option>
          <option value="Doctor">Doctor</option>
          <option value="Clinic">Clinic</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
