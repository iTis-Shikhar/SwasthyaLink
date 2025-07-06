import React from 'react';
import './About.css';

function About() {
// Paste your Unsplash image URL here
const aboutImage = "https://plus.unsplash.com/premium_vector-1682270091935-677cd4ff2f4e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

return (
<div className="about-container">
{/* ⬇️ New image added here */}
<img src={aboutImage} alt="Healthcare" className="about-image" />

  <h2 className="about-heading">🌟 About SwasthyaLink</h2>
  <p className="about-subheading">
    SwasthyaLink is an all-in-one connected healthcare platform designed to make quality medical services accessible to everyone, especially in underserved and rural areas. Our mission is to bridge the gap between patients, doctors, and clinics through a seamless digital experience.
  </p>

  <div className="about-section">
    <h3>💻 How It Works</h3>
    <p><strong>Patients</strong> can easily register or log in, book appointments with doctors, access their e-prescriptions, and manage medication reminders.</p>
    <p><strong>Doctors</strong> can securely log in, view all appointments assigned to them, write digital prescriptions, and conduct teleconsultations.</p>
    <p><strong>Clinics</strong> can request prescription refills and consult with doctors to streamline patient care and ensure essential supplies are always available.</p>
    <p>All user data, appointments, and prescriptions are securely stored and managed using Firebase Firestore, ensuring privacy and real-time updates.</p>

    <h3>✨ Key Features</h3>
    <ul>
      <li><strong>✅ Multi-role Login System:</strong> Separate login and dashboard for Patients, Doctors, and Clinics. Secure authentication using Firebase.</li>
      <li><strong>✅ Appointment Booking:</strong> Patients can select a doctor and schedule appointments instantly. Doctors can view and track upcoming appointments.</li>
      <li><strong>✅ E-Prescription Management:</strong> Doctors can create and submit prescriptions digitally. Patients can access their prescriptions anytime in their dashboard.</li>
      <li><strong>✅ Prescription Refill Requests:</strong> Clinics can request essential medicines and supplies in bulk directly from manufacturers or distributors.</li>
      <li><strong>✅ Teleconsultation (Optional):</strong> Doctors can initiate secure video consultations using Twilio.</li>
      <li><strong>✅ Responsive & User-Friendly Interface:</strong> Clean, intuitive design optimized for web access.</li>
    </ul>

    <h3>🚀 Why SwasthyaLink?</h3>
    <p>In many communities, timely medical advice and reliable medication supply are often out of reach. <br />SwasthyaLink empowers patients to connect directly with trusted healthcare professionals, while also helping clinics maintain steady stocks of life-saving medicines and supplies.</p>
    <p>By preventing shortages of essentials like oxygen or antibiotics, we strive to reduce avoidable fatalities and improve overall health outcomes.</p>
  </div>
</div>
);
}

export default About;