import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';

export default function UserLogo({ initial }) {
  const { colors } = useContext(ThemeContext);
  return (
    <View className=" flex-1 items-center justify-center rounded-full *:text-center">
      <Text style={{ color: colors.LogoText }} className=" text-7xl">
        {initial || 'Hi'}
      </Text>
    </View>
  );
}
