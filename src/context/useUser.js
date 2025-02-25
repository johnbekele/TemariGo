import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

// This hook will store the user in our context and localStorage.

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = async (user) => {
    setUser(user);
    await AsyncStorage.setItem('user', JSON.stringify(user)); // Store user data persistently
  };

  const removeUser = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user'); // Remove user data
  };

  return { user, addUser, removeUser, setUser };
};
