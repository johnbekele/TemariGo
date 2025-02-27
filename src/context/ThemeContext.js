// context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import UserLogo from '~/components/UserLogo';

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
      borderColor: '#000000',
      buttonBackground: '#007AFF',
      buttonText: '#4635B1',
      shadowText: '#e7eaf6',
      activeIcon: '#000000',
      inactiveIcon: '#888888',
      UserLogo: '#000000',
      LogoText: '#ffffff',
    },
    dark: {
      backgroundColor: '#000000',
      textColor: '#ffffff',
      borderColor: '#ffffff',
      buttonBackground: '#4CAF50',
      buttonText: '#AD49E1',
      activeIcon: '#ffffff',
      inactiveIcon: '#888888',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
