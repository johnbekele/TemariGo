import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const useAsyncStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = async (key, value) => {
    try {
      AsyncStorage.setItem(key, value);
      setValue(value);
    } catch (e) {
      console.log('error setting AsyncStorage', e);
    }
  };

  const getItem = async (key) => {
    try {
      AsyncStorage.getItem(key);
      setValue(value);
    } catch (e) {
      console.log('error getting AsyncStorage', e);
    }
  };

  const removeItem = async (key) => {
    try {
      AsyncStorage.removeItem(key);
      setValue(null);
    } catch (e) {
      console.log('error removing AsyncStorage', e);
    }
  };

  return { value, setItem, getItem, removeItem };
};
