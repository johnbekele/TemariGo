// components/UserHeader.jsx
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import { FIREBASE_STORAGE } from '../../firebaseConfig';
import { ThemeContext } from '~/context/ThemeContext';
import UserLogo from '~/components/UserLogo';
import CustomeText from '~/components/CustomeText';

const UserHeader = ({
  imageUrl: initialImageUrl,
  username: initialUsername,
  email: initialEmail,
}) => {
  const { colors } = useContext(ThemeContext); // Access theme colors
  const [profileImageUrl, setProfileImageUrl] = useState(initialImageUrl || null);
  const [username, setUsername] = useState(initialUsername || '');
  const [email, setEmail] = useState(initialEmail || '');
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    console.log('UserHeader - Initial props:', {
      imageUrl: initialImageUrl,
      username: initialUsername,
      email: initialEmail,
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Auth state in UserHeader:', user?.uid || 'null');
      if (user) {
        if (!profileImageUrl) {
          setIsLoading(true);
          try {
            const fileRef = ref(FIREBASE_STORAGE, `profile_pictures/${user.uid}.jpg`);
            const url = await getDownloadURL(fileRef);
            console.log('Fetched image URL:', url);
            setProfileImageUrl(url);
          } catch (error) {
            console.error('Image fetch error:', error.message);
            if (error.code === 'storage/object-not-found') {
              console.log('No image exists for this user yet');
            }
          } finally {
            setIsLoading(false);
          }
        }
        // Set username and email regardless of existing values
        if (!username || !email) {
          setUsername(user.displayName || 'User');
          setEmail(user.email || '');
        }
      }
    });

    return () => unsubscribe();
  }, [auth, profileImageUrl, username, email, initialImageUrl, initialUsername, initialEmail]);

  const initname = username.charAt(0).toUpperCase();

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.backgroundColor, borderBottomColor: colors.borderColor },
      ]}>
      {isLoading ? (
        <Text style={{ color: colors.textColor }}>Loading...</Text>
      ) : profileImageUrl ? (
        <Image
          source={{ uri: profileImageUrl }}
          style={styles.profileImage}
          onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
        />
      ) : (
        <View
          style={[
            styles.profileImage,
            styles.placeholder,
            { backgroundColor: colors.borderColor },
          ]}>
          <UserLogo initial={initname} />
        </View>
      )}
      <Text style={[styles.username, { color: colors.textColor }]}>{username || 'User'}</Text>
      <CustomeText style={{ color: colors.textColor }}>{email}</CustomeText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UserHeader;
