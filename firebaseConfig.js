import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'temarigo-e920d.firebaseapp.com',
  projectId: 'temarigo-e920d',
  storageBucket: 'temarigo-e920d.appspot.com',
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App (only once)
const FIREBASE_APP = initializeApp(firebaseConfig);
console.log('Firebase App initialized:', !!FIREBASE_APP);

// Use getAuth instead of initializeAuth to avoid re-initialization
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
FIREBASE_AUTH.setPersistence = getReactNativePersistence(AsyncStorage); // Set persistence manually if needed
console.log('Firebase Auth initialized:', !!FIREBASE_AUTH);

const FIREBASE_DB = getFirestore(FIREBASE_APP);
console.log('Firestore initialized:', !!FIREBASE_DB);

const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

// Export constants
export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, onAuthStateChanged, FIREBASE_STORAGE };
