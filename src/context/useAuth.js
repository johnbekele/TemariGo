// context/useAuth.js
import { useEffect, useState } from 'react';
import { checkAuthState, login, signUp, logout, resetPassword } from './AuthService';

export const useAuth = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = checkAuthState((user) => {
  //     console.log(
  //       'useAuth - User state:',
  //       user?.uid || 'null',
  //       'emailVerified:',
  //       user?.emailVerified
  //     );
  //     setUser(user && user.emailVerified ? user : null); // Only set user if verified
  //   });
  //   return () => unsubscribe();
  // }, []);

  return { login, signUp, logout, resetPassword };
};
