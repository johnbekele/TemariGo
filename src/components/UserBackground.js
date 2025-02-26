import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';

/**
 * Background component that adjusts to the current theme for post-login screens
 * @param {React.ReactNode} children - Content to render inside the background
 * @param {object} style - Additional styles to apply to the background
 * @returns {React.Component} Theme-aware background container
 */
export default function UserBackground({ children, style }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
