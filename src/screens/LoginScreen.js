import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import { emailValidator } from '~/helpers/emailValidator';
import { passwordValidator } from '~/helpers/passwordValidator';
import AnimatedLoding from '~/components/AnimatedLoading';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    // Debugging the values to see if the validation functions are working
    console.log('Email:', email.value, 'Password:', password.value);
    console.log('Email Error:', emailError);
    console.log('Password Error:', passwordError);

    if (emailError || passwordError) {
      setEmail((prevState) => ({ ...prevState, error: emailError }));
      setPassword((prevState) => ({ ...prevState, error: passwordError }));
      return; // Return early if there are errors
    }
    setIsLoading(true); // Show loading animation
    navigation.navigate('Dashboard'); // Navigate if validation passes
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
            secureTextEntry
            type="password"
          />
          <View className="-px-4 -mt-4 w-full flex-row-reverse">
            <TextButton
              className="font-semibold"
              title="Forgot Password?"
              onPress={() => navigation.navigate('Forgot')}
            />
          </View>

          {isLoading ? (
            <AnimatedLoding />
          ) : (
            <Button mode="outlined" onPress={onLoginPressed}>
              {' '}
              Log In{' '}
            </Button>
          )}

          <View className="mt-4 flex-row">
            <Text>Don't have an account? </Text>
            <TextButton
              className="font-semiborder-l-red-300 ml-1 pr-4 font-semibold text-blue-600 underline"
              title="Sign Up"
              onPress={() => {
                console.log('Sign Up');
                navigation.navigate('Signup');
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
