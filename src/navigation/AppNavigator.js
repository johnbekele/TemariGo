import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import { FIREBASE_AUTH } from '../../firebaseConfig'; // Double-check this path

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={RegisterScreen} />
    <Stack.Screen name="Forgot" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('FIREBASE_AUTH in AppNavigator:', FIREBASE_AUTH);
    if (!FIREBASE_AUTH) {
      console.error('FIREBASE_AUTH is still undefined in AppNavigator!');
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user) => {
        console.log('Auth state changed, user:', user);
        setIsAuthenticated(!!user);
        setIsLoading(false);
      },
      (error) => {
        console.error('Auth state error:', error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return isAuthenticated ? <MainStack /> : <AuthStack />;
}
