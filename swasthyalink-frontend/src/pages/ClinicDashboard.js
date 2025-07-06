import React from 'react';
import './Dashboard.css';

export default function ClinicDashboard() {
return (
<div className="dashboard-container">
<h2 className="dashboard-title">Welcome, Clinic Holder</h2>
<p style={{ textAlign: 'center', marginTop: '10px', color: '#555', fontSize: '1.1rem' }}>
We're here to help you manage your clinic efficiently. As a clinic holder, you can easily request medicine refills and arrange emergency consultations with assigned doctors.
</p>
<div className="dashboard-grid">
<div className="dashboard-card">
<h3>💊 Medicine Refill</h3>
<p>Order essential medicines when your stock runs low.</p>
<button>Order Medicines</button>
</div>
<div className="dashboard-card">
<h3>🚨 Emergency Video Consultation</h3>
<p>Connect with an assigned doctor for urgent medical guidance in critical rural cases.</p>
<button>Start Emergency Call</button>
</div>
</div>
</div>
);
}