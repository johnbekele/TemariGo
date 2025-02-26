// context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  useEffect(() => {
    if (isSystemTheme) {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        console.log('System theme changed to:', colorScheme); // Debug
        setTheme(colorScheme || 'light');
      });
      return () => subscription.remove();
    }
  }, [isSystemTheme]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme); // Debug
    setIsSystemTheme(false);
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('New theme:', newTheme); // Debug
      return newTheme;
    });
  };

  const themes = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      borderColor: '#dddddd',
      buttonBackground: '#007AFF',
      buttonText: '#ffffff',
    },
    dark: {
      backgroundColor: '#1a1a1a',
      textColor: '#ffffff',
      borderColor: '#444444',
      buttonBackground: '#4CAF50',
      buttonText: '#ffffff',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
