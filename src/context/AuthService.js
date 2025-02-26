// context/AuthService.js
import { Alert } from 'react-native';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export const checkAuthState = (callback) => {
  return onAuthStateChanged(FIREBASE_AUTH, callback);
};

export const login = async (email, password) => {
  console.log('Login inputs:', { email, password });
  try {
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const user = userCredential.user;
    if (!user.emailVerified) {
      await signOut(FIREBASE_AUTH); // Sign out if not verified
      throw new Error('Email not verified. Please check your inbox.');
    }
    console.log('User logged in:', user);
    return userCredential;
  } catch (error) {
    console.error('Login Error:', error.code, error.message);
    throw error;
  }
};

export const signUp = async (email, password, username) => {
  console.log('Raw inputs to signUp:', { email, password, username });
  try {
    const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: username });
    console.log('User signed up:', user);

    // Send verification email
    await sendEmailVerification(user);
    console.log('Verification email sent to:', email);

    // Sign out user after signup to enforce verification
    await signOut(FIREBASE_AUTH);
    console.log('User signed out after signup for verification');

    return userCredential; // Return credential for further use (e.g., uid)
  } catch (error) {
    console.error('Sign-Up Error:', error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(FIREBASE_AUTH);
    console.log('User logged out');
  } catch (error) {
    console.error('Logout Error:', error.message);
    throw error;
  }
};

export const resetPassword = async (email) => {
  console.log('Reset password requested for:', email);
  try {
    await sendPasswordResetEmail(FIREBASE_AUTH, email);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Reset Password Error:', error.code, error.message);
    throw error;
  }
};
