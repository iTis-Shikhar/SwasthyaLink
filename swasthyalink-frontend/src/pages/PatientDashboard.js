import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
const navigate = useNavigate();

return (
<div className="dashboard-container">
<h2 className="dashboard-title">Welcome, Patient</h2>
<p style={{ textAlign: 'center', marginTop: '-1rem', color: '#555' }}>
Your health is our priority — manage your appointments, prescriptions, and care with ease.
</p>
<div className="dashboard-grid">
<div className="dashboard-card">
<h3>📅 Book Appointment</h3>
<p>Schedule a consultation with your doctor.</p>
<button onClick={() => navigate('/book-appointment')}>Book Now</button>
</div>
<div className="dashboard-card">
<h3>💊 My Prescription</h3>
<p>View your prescribed medicines anytime.</p>
<button onClick={() => navigate('/my-prescription')}>View Prescription</button>
</div>
<div className="dashboard-card">
<h3>⏰ Set Reminders</h3>
<p>Get alerts for taking medicines and appointments.</p>
<button onClick={() => navigate('/set-reminders')}>Set Reminder</button>
</div>
<div className="dashboard-card">
<h3>📹 Join Virtual Visit</h3>
<p>Start an online consultation with your doctor.</p>
<button onClick={() => navigate('/join-virtual-visit')}>Join Now</button>
</div>
</div>
</div>
);
}