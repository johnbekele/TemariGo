import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function FontLoader({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    Orbitron: require('../../assets/fonts/Orbitron-VariableFont_wght.ttf'),
    Playwrite: require('../../assets/fonts/PlaywriteITModerna-VariableFont_wght.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  if (fontError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading fonts. Using default font.</Text>
      </View>
    );
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children; // Render the app once fonts are loaded
}
