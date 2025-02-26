import React, { useContext, useState } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import { emailValidator } from '~/helpers/emailValidator';
import { passwordValidator } from '~/helpers/passwordValidator';
import AnimatedLoding from '~/components/AnimatedLoading';
import { AuthContext } from '~/context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    console.log('Inputs:', { email: email.value, password: password.value });
    console.log('Errors:', { emailError, passwordError });

    if (emailError || passwordError) {
      setEmail((prev) => ({ ...prev, error: emailError }));
      setPassword((prev) => ({ ...prev, error: passwordError }));
      return;
    }

    setIsLoading(true);
    try {
      console.log('Attempting login...');
      await login(email.value.trim(), password.value);
      console.log('Login successful');
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Login failed:', error.message);
      let errorMessage = 'An error occurred. Please try again.';
      switch (error.code) {
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Try again later.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View className="flex-1 items-center gap-6 px-6">
          <Logo />
          <HeadingText text="Welcome Sign In" />
          <Input
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            type="email"
          />
          <Input
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            type="password"
          />
          <View className="-mt-4 w-full flex-row-reverse">
            <TextButton
              className="font-semibold text-blue-600 underline"
              title="Forgot Password?"
              onPress={() => navigation.navigate('Forgot')}
            />
          </View>
          {isLoading ? (
            <AnimatedLoding />
          ) : (
            <Button mode="outlined" onPress={onLoginPressed}>
              Log In
            </Button>
          )}
          <View className="-mt-4 flex-row">
            <Text>Don't have an account? </Text>
            <TextButton
              className="ml-1 pr-4 font-semibold text-blue-600 underline"
              title="Sign Up"
              onPress={() => {
                console.log('Navigating to Sign Up');
                navigation.navigate('Signup');
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
