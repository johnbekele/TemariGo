import { useEffect, useState } from 'react';
import { checkAuthState, login, signUp, logout, resetPassword } from './AuthService';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = checkAuthState(setUser);
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return { user, login, signUp, logout, resetPassword };
};
