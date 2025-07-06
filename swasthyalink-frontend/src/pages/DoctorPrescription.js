import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
// import './DoctorPrescription.css'; // Uncomment if you have styles

export default function DoctorPrescription() {
  const { user } = useAuth();

  const [patient, setPatient] = useState({ name: '', age: '', email: '' });
  const [medicines, setMedicines] = useState(['']);
  const [notes, setNotes] = useState('');

  const handlePatientChange = (field, value) => {
    setPatient({ ...patient, [field]: value });
  };

  const handleMedicineChange = (index, value) => {
    const updated = [...medicines];
    updated[index] = value;
    setMedicines(updated);
  };

  const handleAddMedicine = () => {
    setMedicines([...medicines, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !patient.name ||
      !patient.age ||
      !patient.email ||
      medicines.some((med) => !med)
    ) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'prescriptions'), {
        patientEmail: patient.email,
        patientName: patient.name,
        patientAge: patient.age,
        doctorName: user?.email || 'Unknown Doctor',
        date: new Date().toISOString().split('T')[0],
        medicines,
        notes
      });

      alert('Prescription submitted and saved successfully!');
      // Clear form
      setPatient({ name: '', age: '', email: '' });
      setMedicines(['']);
      setNotes('');
    } catch (error) {
      console.error('Error submitting prescription:', error);
      alert('Error submitting prescription: ' + error.message);
    }
  };

  return (
    <div className="prescription-container">
      <h2>📝 Write E-Prescription</h2>

      <form onSubmit={handleSubmit} className="prescription-form">
        <div className="section">
          <h3>👤 Patient Information</h3>
          <input
            type="text"
            placeholder="Patient Name"
            value={patient.name}
            onChange={(e) => handlePatientChange('name', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={patient.age}
            onChange={(e) => handlePatientChange('age', e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={patient.email}
            onChange={(e) => handlePatientChange('email', e.target.value)}
            required
          />
        </div>

        <div className="section">
          <h3>💊 Medicines</h3>
          {medicines.map((medicine, index) => (
            <div key={index} className="medicine-item">
              <label>Medicine {index + 1}:</label>
              <input
                type="text"
                value={medicine}
                onChange={(e) => handleMedicineChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddMedicine} className="add-btn">
            ➕ Add Another Medicine
          </button>
        </div>

        <div className="section">
          <h3>📝 Doctor's Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
            placeholder="e.g. Take after food, avoid cold items..."
            required
          />
        </div>

        <button type="submit" className="submit-btn">✅ Submit & Send</button>
      </form>
    </div>
  );
}
