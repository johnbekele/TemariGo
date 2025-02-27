// components/ToggleButton.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';

/**
 * ToggleButton component that switches between light and dark themes
 * @returns {React.Component} Toggle button UI
 */
export default function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isActive = theme === 'dark'; // True for light, false for dark

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.toggleContainer, isActive ? styles.inactive : styles.active]}
        onPress={toggleTheme} // Directly use toggleTheme from context
      >
        <View style={[styles.thumb, isActive ? styles.thumbActive : styles.thumbInactive]}>
          {isActive ? (
            <Text style={styles.icon}>🌜</Text> // Light mode
          ) : (
            <Text style={styles.icon}>🌞</Text>
            // Dark mode
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleContainer: {
    width: 50,
    height: 20,
    borderRadius: 15,
    padding: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: '#9ee3fb', // Light mode
  },
  inactive: {
    backgroundColor: '#3c4145', // Dark mode
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 2,
  },
  thumbActive: {
    left: 30, // Light mode (right)
  },
  thumbInactive: {
    left: 5, // Dark mode (left)
  },
  icon: {
    fontSize: 16,
  },
});
