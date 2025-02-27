// components/UserHeader.jsx
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import { FIREBASE_STORAGE } from '../../firebaseConfig';
import { ThemeContext } from '~/context/ThemeContext';
import UserLogo from '~/components/UserLogo';
import CustomeText from '~/components/CustomeText';
import Button from '~/components/Button';
import TextButton from './TextButton';
import GoogleLogo from './GoogleLogo';
import { useNavigation } from '@react-navigation/native';

const UserHeader = ({
  imageUrl: initialImageUrl,
  username: initialUsername,
  email: initialEmail,
}) => {
  const { colors } = useContext(ThemeContext);
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
        setUsername(user.displayName || initialUsername || 'User');
        setEmail(user.email || initialEmail || '');
      }
    });

    return () => unsubscribe();
  }, [auth, profileImageUrl, initialImageUrl, initialUsername, initialEmail]);

  const initname = username.charAt(0).toUpperCase();

  console.log('Rendering username:', username, 'email:', email);

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.backgroundColor, shadowColor: colors.borderColor },
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
      <View style={styles.textContainer}>
        <Text style={[styles.username, { color: colors.textColor }]}>{username || 'User'}</Text>
        <View className="flex-row items-center">
          <GoogleLogo />
          <TextButton
            className="text-base"
            style={{ color: colors.textColor }}
            title={email || 'No Email Provided'}
            onPress={() => {}}
          />
        </View>
      </View>
      <TextButton
        style={{ color: colors.buttonText, fontWeight: 'bold' }}
        title="Become an instructor"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
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
  textContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontSize: 20,

    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007AFF', // Default, overridden by props if themed
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: 'white',
  },
});

export default UserHeader;
