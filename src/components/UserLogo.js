import { View, Text } from 'react-native';
import React from 'react';

export default function UserLogo({ initial }) {
  return (
    <View className="bg-dark-500 flex-1 items-center justify-center rounded-full *:text-center">
      <Text className="text-dark-500  text-6xl font-bold">{initial}</Text>
    </View>
  );
}
