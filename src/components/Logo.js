import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text } from 'react-native';
import AnimatedLogo from './AnimatedLogo';

export default function Logo() {
  return (
    <View className="w-full flex-col items-center justify-center  py-4">
      <AnimatedLogo />
      <Text className="-mt-5 ml-5 text-4xl font-bold">ተማሪ GO</Text>
    </View>
  );
}
