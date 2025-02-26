import { View, Text, StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import { emailValidator } from '~/helpers/emailValidator';
import AnimatedLock from '~/components/AnimatedLock';
import { useAuth } from '~/context/useAuth';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [message, setMessage] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { resetPassword } = useAuth(); // Changed from handleResetPassword to resetPassword

  const onResetPressed = async () => {
    const emailError = emailValidator(email.value);

    console.log('Reset email:', email.value);
    console.log('Email Error:', emailError);

    if (emailError) {
      setEmail((prev) => ({ ...prev, error: emailError }));
      return;
    }

    try {
      await resetPassword(email.value.trim());
      setMessage(true);
      setIsDone(true);
      console.log('Reset link sent successfully');
    } catch (error) {
      console.error('Reset failed:', error.message);
      let errorMessage = 'Failed to send reset link.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many requests. Try again later.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <Background>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View className="flex-1 items-center gap-6 px-6">
          {isDone ? <AnimatedLock /> : <Logo />}
          <HeadingText text="Reset Password" />
          <Input
            label="Email"
            returnKeyType="done" // Changed to "done" since it's the only field
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
          {message && (
            <View className="-mt-4 flex-row flex-wrap justify-center">
              <Text>Reset link sent to your email. </Text>
              <TextButton
                className="font-semibold text-blue-600 underline"
                title="Log in"
                onPress={() => {
                  console.log('Log in pressed');
                  navigation.navigate('Login');
                }}
              />
            </View>
          )}
          <Button
            style={{ display: isDone ? 'none' : 'flex' }} // Fixed display prop
            onPress={onResetPressed}
            mode="outlined">
            Reset Password
          </Button>
          <View style={{ display: isDone ? 'none' : 'flex' }} className="-mt-4 flex-row">
            <Text>Remember your password? </Text>
            <TextButton
              className="font-semibold text-blue-600 underline"
              title="Sign in"
              onPress={() => {
                console.log('Log in pressed');
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
