import React from 'react';
import './BookAppointment.css'; // reuse styles for consistency

export default function MyPrescription() {
  const prescriptions = [
    {
      id: 1,
      doctor: 'Dr. Priya Sharma',
      date: '2025-07-05',
      medicines: [
        'Paracetamol 500mg - 1 tab twice daily',
        'Vitamin C - 1 tab daily'
      ],
      notes: 'Drink plenty of fluids and rest.'
    },
    {
      id: 2,
      doctor: 'Dr. Rajesh Kumar',
      date: '2025-06-20',
      medicines: [
        'Amoxicillin 250mg - 1 tab thrice daily'
      ],
      notes: 'Complete the antibiotic course.'
    }
  ];

  return (
    <div className="appointment-container">
      <h2>💊 My Prescription</h2>
      <p>Here you can view all your prescriptions.</p>

      <div className="prescription-list">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="prescription-card">
            <h3>👨‍⚕️ {prescription.doctor}</h3>
            <p><strong>Date:</strong> {prescription.date}</p>
            <p><strong>Medicines:</strong></p>
            <ul>
              {prescription.medicines.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
            <p><strong>Notes:</strong> {prescription.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
