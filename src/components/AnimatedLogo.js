import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function AnimatedLogo({ size }) {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require('../../assets/animations/TemariAnim.json')}
        autoPlay
        loop
      />
    </View>
  );
}
