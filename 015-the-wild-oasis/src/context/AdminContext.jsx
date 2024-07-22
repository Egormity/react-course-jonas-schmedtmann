import { createContext, useContext } from 'react';
import { getCurrentUser } from '../services/apiAuth';
import { useUser } from '../features/authentication/useUser';

const AdminContext = createContext();

function AdminProvider({ children }) {
  const { user } = useUser();

  return <AdminContext.Provider value={{ as: 123 }}>{children}</AdminContext.Provider>;
}

function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) throw new Error('Dark mode context was used outside of AdminProvider');
  return context;
}

export { AdminProvider, useAdmin };
