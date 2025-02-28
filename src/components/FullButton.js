import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function FullButton({ title, onPress, ...props }) {
  const { colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      className="  pb-safe-or-11 w-full flex-row gap-6"
      style={{ backgroundColor: colors.backgroundColor }}
      onPress={onPress}
      {...props}>
      <Text style={{ color: colors.textColor }}> {title}</Text>
      <View className="flex-1 items-end">
        <MaterialIcons name="arrow-forward-ios" size={24} color={colors.textColor} />
      </View>
    </TouchableOpacity>
  );
}
