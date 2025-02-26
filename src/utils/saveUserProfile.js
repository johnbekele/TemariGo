import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';

export const saveUserProfile = async (downloadURL) => {
  try {
    const user = FIREBASE_AUTH.currentUser;

    if (!user) return;

    const db = getFirestore();
    await setDoc(doc(db, 'users', user.uid), { profilePic: downloadURL }, { merge: true });

    console.log('Profile picture saved to Firestore!');
  } catch (error) {
    console.error('Firestore save error:', error);
  }
};
