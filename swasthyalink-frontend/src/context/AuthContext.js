import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { uid, email, role }

  const login = (userData) => {
    // Make sure userData includes uid
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // 🔐 Helper: Get dashboard route by user role
  const getDashboardRouteByRole = (role) => {
    switch (role) {
      case 'Patient':
        return '/patient-dashboard';
      case 'Doctor':
        return '/doctor-dashboard';
      case 'Clinic':
        return '/clinic-dashboard';
      default:
        return '/';
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getDashboardRouteByRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
