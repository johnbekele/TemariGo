import { View, Text, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import HeadingText from '~/components/HeadingText';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import Background from '~/components/Background';
import { emailValidator } from '~/helpers/emailValidator';
import { passwordValidator } from '~/helpers/passwordValidator';
import { nameValidator } from '~/helpers/nameValidator';
import AnimatedLoding from '~/components/AnimatedLoading';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);

  const onSignUpPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(username.value);

    setIsLoading(true); // Show loading animation
    setTimeout(() => {
      setIsLoading(false); // Hide loading animation after 2 seconds
    }, 2000);

    // Debugging the values to see if the validation functions are working
    console.log('Username:', username.value, 'Email:', email.value, 'Password:', password.value);
    console.log('Username Error:', nameError);
    console.log('Email Error:', emailError);
    console.log('Password Error:', passwordError);

    if (emailError || passwordError || nameError) {
      setUsername((prevState) => ({ ...prevState, error: nameError }));
      setEmail((prevState) => ({ ...prevState, error: emailError }));
      setPassword((prevState) => ({ ...prevState, error: passwordError }));
      return; // Return early if there are errors
    }

    navigation.navigate('Dashboard'); // Navigate if validation passes
  };

  return (
    <Background>
      <View className="flex-1 ">
        <StatusBar style="dark" />

        <View className="flex-1 items-center justify-center gap-6 px-6">
          <Logo />
          <HeadingText text="Welcome Create an account" />
          <Input
            type="username"
            label="Username"
            returnKeyType="next"
            value={username.value}
            onChangeText={(text) => setUsername({ value: text, error: '' })}
            error={!!username.error}
            errorText={username.error}
            autoCapitalize="none"
            autoCompleteType="username"
            textContentType="username"
            keyboardType="default" // Fixed keyboardType
            placeholder="Username"
          />
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
          {isLoading ? (
            <AnimatedLoding />
          ) : (
            <Button mode="outlined" onPress={onSignUpPressed}>
              {' '}
              Sign Up{' '}
            </Button>
          )}

          <View className="-mt-4 flex-row  ">
            <Text>Already have an account? </Text>
            <TextButton
              className="font-semiborder-l-red-300 ml-1 pr-4 font-semibold text-blue-600 underline"
              title="Log In"
              onPress={() => {
                console.log('Login');
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
