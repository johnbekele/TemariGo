import { View, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

export default function UploadeImageButton({ ...props }) {
  return (
    <View>
      <TouchableOpacity
        className="rounded-2x h-8 w-full flex-row   gap-2 bg-neutral-100"
        {...props}>
        <Text className="mt-1 font-semibold text-neutral-700">Uploaded successfully</Text>
        <Entypo name="upload" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
