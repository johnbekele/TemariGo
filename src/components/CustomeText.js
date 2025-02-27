// components/CustomeText.js
import React, { Children, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';

export default function CustomeText({
  children,
  className,
  containerClass,
  style,
  textStyle,
  ...props
}) {
  const { colors } = useContext(ThemeContext); // Access theme colors

  // the class name for the view is affected by props

  return (
    <View className={containerClass} {...props}>
      <Text className={className} style={{ color: colors.textColor, ...props }}>
        {children}
      </Text>
    </View>
  );
}
