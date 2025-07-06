import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

function Home() {
const navigate = useNavigate(); // ✅ Hook for navigation

const handleGetStarted = () => {
navigate('/login'); // ✅ Redirect to login page
};

return (
<div className="home-container">
<div className="home-content">
<h1>Welcome to SwasthyaLink</h1>
<p>
Your one-stop platform for managing appointments, accessing prescriptions, and connecting with your healthcare team.
</p>
<button className="home-button" onClick={handleGetStarted}>
Get Started
</button>
</div>
</div>
);
}

export default Home;