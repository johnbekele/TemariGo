import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import Octicons from 'react-native-vector-icons/Octicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from 'react-native-vector-icons';

export default function Inpute({ errorText, type, description, ...props }) {
  const [icon, setIcon] = useState();
  const [placeholder, setplaceholder] = useState();
  const [isSecure, setIsSecure] = useState(true);

  const togglePasswordVisibility = () => {
    setIsSecure(!isSecure); // Toggle password visibility
  };

  useEffect(() => {
    if (type === 'password') {
      setIcon('lock');
      setplaceholder('Password');
    } else if (type === 'email') {
      setIcon('mail');
      setplaceholder('Email');
    } else if (type === 'username') {
      setIcon('person');
      setplaceholder('Username');
    }
  }, [type]);
  return (
    <View
      style={{ fontSize: hp(7) }}
      className="item-center flex-row gap-4 rounded-2xl bg-neutral-100 px-4 py-4  text-center  font-bold  text-neutral-700 ">
      <Octicons name={icon} size={hp(2.7)} color="gray" />
      <TextInput
        className="flex-1 font-semibold text-neutral-700"
        placeholder={placeholder}
        secureTextEntry={type === 'password' ? isSecure : false}
        {...props}
      />
      {type === 'password' && ( // Only show the eye icon for password fields
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={isSecure ? 'eye-off' : 'eye'} size={hp(2.7)} color="gray" />
        </TouchableOpacity>
      )}
      {errorText ? <Text className="text-red-500">{errorText}</Text> : null}
    </View>
  );
}
