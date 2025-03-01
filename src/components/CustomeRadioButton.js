import { View, Text } from 'react-native';
import { useState, useContext } from 'react';
import { RadioButton } from 'react-native-paper';
import { ThemeContext } from '~/context/ThemeContext';

export default function CustomRadioButton({ title, value, status, onPress, ...props }) {
  const { colors } = useContext(ThemeContext); // Access theme colors

  return (
    <View
      style={{
        height: '40',
        width: '90%',
        borderColor: colors.textColor,
      }}
      className="w-md mb-4 flex-row border-2   p-1">
      <RadioButton color={colors.textColor} value={value} status={status} onPress={onPress} />
      <Text style={{ color: colors.textColor, ...props }} className="font-robot font-san mt-2">
        {title}
      </Text>
    </View>
  );
}
