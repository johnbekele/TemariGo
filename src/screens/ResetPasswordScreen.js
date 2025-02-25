import { View, Text, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import { emailValidator } from '~/helpers/emailValidator';
import AnimatedLock from '~/components/AnimatedLock';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [message, setMessage] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const onResetPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail((prevState) => ({ ...prevState, error: emailError }));
      return; // Return early if there are errors
    }
    setMessage(true);
    setIsDone(true); // Hide lock and show message
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
          {message && (
            <View className="mt-4 flex-row">
              <Text>Reset link has been sent to your email. </Text>
              <TextButton
                className="font-semiborder-l-red-300 ml-1 pr-4 font-semibold text-blue-600 underline"
                title="Log in "
                onPress={() => {
                  console.log('log in pressed');
                  navigation.navigate('Login');
                }}
              />
            </View>
          )}

          <Button display={isDone ? 'none' : 'flex'} onPress={onResetPressed} mode="outlined">
            Reset Password
          </Button>
          <View display={isDone ? 'none' : 'flex'} className="mt-4 flex-row">
            <Text>Remember your password? </Text>
            <TextButton
              className="font-semiborder-l-red-300 pr-4"
              title="Sign in"
              onPress={() => {
                console.log('log in pressed');
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
