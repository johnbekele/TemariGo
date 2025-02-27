// components/Footer.js
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Keyboard, Animated, Platform } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';

export default function Footer({ children }) {
  const { colors } = useContext(ThemeContext);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const animatedValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (event) => {
        const height = event.endCoordinates.height;
        setKeyboardHeight(height);
        Animated.timing(animatedValue, {
          toValue: height,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setKeyboardHeight(0));
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [animatedValue]);

  return (
    <Animated.View
      style={[
        styles.footer,
        {
          backgroundColor: colors.backgroundColor,
          borderTopColor: colors.borderColor,
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, keyboardHeight],
                outputRange: [0, -keyboardHeight],
              }),
            },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderTopopacity: 0.1,
    elevation: 0,
    alignItems: 'center',
  },
});
