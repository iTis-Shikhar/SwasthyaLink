import React, { useEffect, useState } from 'react';
import './BookAppointment.css'; // reuse styles for consistency
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function MyPrescription() {
  const { user } = useAuth();
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchPrescriptions = async () => {
      try {
        const q = query(
          collection(db, 'prescriptions'),
          where('patientEmail', '==', user.email)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPrescriptions(data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, [user]);

  return (
    <div className="appointment-container">
      <h2>💊 My Prescription</h2>
      <p>Here you can view all your prescriptions.</p>

      {loading ? (
        <p>Loading...</p>
      ) : prescriptions.length === 0 ? (
        <p>No prescriptions found.</p>
      ) : (
        <div className="prescription-list">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="prescription-card">
              <h3>👨‍⚕️ {prescription.doctorName || 'Doctor'}</h3>
              <p><strong>Date:</strong> {prescription.date || 'N/A'}</p>
              <p><strong>Medicines:</strong></p>
              <ul>
                {(prescription.medicines || []).map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
              <p><strong>Notes:</strong> {prescription.notes || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
