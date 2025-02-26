import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthContext } from '~/context/AuthContext';
import { useAuth } from '~/context/useAuth'; // Adjust path if needed
import AppNavigator from '~/navigation/AppNavigator';
import './global.css';
import { ThemeProvider } from './src/context/ThemeContext';
export default function App() {
  const auth = useAuth(); // Get auth state and methods from useAuth

  return (
    <ThemeProvider>
      <AuthContext.Provider value={auth}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
