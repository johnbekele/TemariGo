import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import React from 'react';
import { Text, ActivityIndicator } from 'react-native';

export default function HeadingText({ text, className = '' }) {
  const [fontsLoaded] = useFonts({
    GreatVibes: GreatVibes_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#000" />;
  }

  return (
    <Text className={`text-4xl text-black ${className}`} style={{ fontFamily: 'GreatVibes' }}>
      {text}
    </Text>
  );
}
