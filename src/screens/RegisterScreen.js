// screens/RegisterScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, StatusBar, Alert, ScrollView } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';
import { AuthContext } from '~/context/AuthContext';
import { FIREBASE_STORAGE } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { sendEmailVerification } from 'firebase/auth'; // Add this import
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import AnimatedLoding from '~/components/AnimatedLoading';
import UploadeImageButton from '~/components/UploadeImageButton';
import AnimatedUploaded from '~/components/AnimatedUploaded';
import Footer from '~/components/Footer';
import { emailValidator } from '~/helpers/emailValidator';
import { passwordValidator } from '~/helpers/passwordValidator';
import { nameValidator } from '~/helpers/nameValidator';
import { uploadImage } from '~/utils/uploadImage';
import { saveUserProfile } from '~/utils/saveUserProfile';

export default function RegisterScreen({ navigation }) {
  const { colors } = useContext(ThemeContext);
  const { signUp } = useContext(AuthContext);
  const [username, setUsername] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);

  const [imageData, setImageData] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    try {
      setIsUploading(true);
      const image = await uploadImage();
      console.log('Image data:', image);
      if (image) {
        setImageData(image);
        setIsUploaded(true);
        Alert.alert('Success', 'Image selected, please sign up to complete');
      }
    } catch (error) {
      console.error('Handle upload error:', error.message);
      Alert.alert('Error', error.message || 'Failed to select image');
    } finally {
      setIsUploading(false);
    }
  };

  const completeImageUpload = async (uid) => {
    if (!imageData || !uid) {
      console.log('Missing imageData or uid:', { imageData, uid });
      return null;
    }
    try {
      const fileRef = ref(FIREBASE_STORAGE, `profile_pictures/${uid}.jpg`);
      console.log('Uploading to:', fileRef.fullPath);
      await uploadBytes(fileRef, imageData.blob);
      const downloadURL = await getDownloadURL(fileRef);
      console.log('Upload complete, URL:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Upload error:', error.message);
      throw error;
    }
  };

  // on SignUpPressed  response
  const onSignUpPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(username.value);

    if (emailError || passwordError || nameError) {
      setUsername((prev) => ({ ...prev, error: nameError }));
      setEmail((prev) => ({ ...prev, error: emailError }));
      setPassword((prev) => ({ ...prev, error: passwordError }));
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await signUp(email.value, password.value, username.value);
      const user = userCredential.user;
      const uid = user.uid;
      console.log('User signed up, UID:', uid);

      let downloadURL = null;
      if (imageData) {
        downloadURL = await completeImageUpload(uid);
        if (downloadURL) {
          await saveUserProfile(downloadURL);
          console.log('Profile saved with URL:', downloadURL);
        }
      }

      Alert.alert(
        'Verification Required',
        'A verification email has been sent to your email address. Please verify your email before logging in.',
        [{ text: 'OK', onPress: () => navigation.replace('Login') }]
      );
    } catch (error) {
      console.error('Signup error:', error.message);
      if (error.code === 'auth/too-many-requests') {
        Alert.alert(
          'Too Many Attempts',
          'Too many signup attempts. Please wait a few minutes and try again.'
        );
      } else {
        Alert.alert('Error', error.message || 'Registration failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={colors.backgroundColor === '#ffffff' ? 'dark-content' : 'light-content'}
        />

        <View style={{ alignItems: 'center', gap: 6 }}>
          <Logo />
          <HeadingText text="Welcome Create an account" style={{ color: colors.textColor }} />
          <Input
            type="username"
            label="Username"
            returnKeyType="next"
            value={username.value}
            onChangeText={(text) => setUsername({ value: text, error: '' })}
            error={!!username.error}
            errorText={username.error}
            autoCapitalize="none"
            placeholder="Username"
            style={{ color: colors.textColor, borderColor: colors.borderColor }}
          />
          <Input
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            keyboardType="email-address"
            type="email"
            style={{ color: colors.textColor, borderColor: colors.borderColor }}
          />
          <Input
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            type="password"
            style={{ color: colors.textColor, borderColor: colors.borderColor }}
          />
          {isUploading ? (
            <AnimatedLoding />
          ) : isUploaded ? (
            <AnimatedUploaded />
          ) : (
            <UploadeImageButton onPress={handleUpload} />
          )}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <Text style={{ color: colors.textColor }}>Already have an account? </Text>
            <TextButton
              className="font-semibold text-blue-600 underline"
              title="Log In"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>

        <Footer>
          <Button
            mode="contained"
            onPress={onSignUpPressed}
            style={{ width: '90%', backgroundColor: colors.buttonBackground }}
            disabled={isLoading}>
            <Text style={{ color: colors.buttonText }}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Text>
          </Button>
        </Footer>
      </View>
    </Background>
  );
}
