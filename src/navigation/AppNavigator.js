// navigation/AppNavigator.js
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider } from '../context/ThemeContext';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={RegisterScreen} />
    <Stack.Screen name="Forgot" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

const MainStack = ({ userData }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} initialParams={userData} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log('FIREBASE_AUTH in AppNavigator:', FIREBASE_AUTH);
    if (!FIREBASE_AUTH) {
      console.error('FIREBASE_AUTH is undefined!');
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(
        'Auth state changed, user:',
        user?.uid || 'null',
        'emailVerified:',
        user?.emailVerified
      );
      if (user && user.emailVerified) {
        setIsAuthenticated(true);
        setUserData({
          uid: user.uid,
          username: user.displayName || 'User',
          email: user.email || '',
        });
      } else {
        setIsAuthenticated(false);
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      {isAuthenticated || isAdmin ? <MainStack userData={userData} /> : <AuthStack />}
    </ThemeProvider>
  );
}
