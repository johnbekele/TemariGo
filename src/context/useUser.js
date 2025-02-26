import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (userData) => setUser(userData);
  const removeUser = () => setUser(null);

  return { user, addUser, removeUser };
};
