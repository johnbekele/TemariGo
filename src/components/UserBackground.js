import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
    <ScrollView
      style={{ backgroundColor: colors.backgroundColor, ...style }}
      contentContainerStyle={styles.scrollView}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
