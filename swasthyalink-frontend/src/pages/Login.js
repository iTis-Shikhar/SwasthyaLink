import React, { useState } from 'react';
import './Auth.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login, getDashboardRouteByRole } = useAuth();
const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();

try {
  console.log('🌟 Starting login for:', email);

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;
  console.log('✅ Signed in successfully, UID:', uid);

  const docRef = doc(db, 'users', uid);
  console.log('📄 Fetching Firestore doc path:', docRef.path);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();
    console.log('✅ Fetched user data:', userData);

    const user = { uid, email: userData.email, role: userData.role };
    login(user);

    const dashboardPath = getDashboardRouteByRole(user.role);
    console.log('➡️ Navigating to:', dashboardPath);
    navigate(dashboardPath);
  } else {
    console.error('❌ Firestore document not found for UID:', uid);
    alert('User record not found in Firestore. Please contact support or try registering again.');
  }
} catch (error) {
  console.error('🔥 Login Error:', error.code, error.message);
  if (error.code === 'auth/wrong-password') {
    alert('Incorrect password. Please try again.');
  } else if (error.code === 'auth/user-not-found') {
    alert('No user found with this email.');
  } else {
    alert('Login failed: ' + error.message);
  }
}
};

return (
<div className="auth-container">
<h2 className="auth-heading">Welcome Back</h2>
<form onSubmit={handleLogin}>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<button type="submit">Login</button>
</form>
</div>
);
}

export default Login;