import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function TextButton({ title, ...props }) {
  return (
    <View>
      <TouchableOpacity {...props}>
        <Text {...props}>{title || 'Loading...'}</Text>
      </TouchableOpacity>
    </View>
  );
}
