// components/CustomeText.js
import React, { Children, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';

export default function CustomeText({ children, style, textStyle, ...props }) {
  const { colors } = useContext(ThemeContext); // Access theme colors

  return (
    <View className="w-full justify-start pb-4">
      <Text className="text-sm " style={{ color: colors.textColor }} {...props}>
        {children}
      </Text>
    </View>
  );
}
