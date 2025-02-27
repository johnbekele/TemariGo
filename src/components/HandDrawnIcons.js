import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { View } from 'react-native';

const HandDrawnIcons = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      {/* Book */}
      <Svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2">
        <Path d="M6 4H16V20H6Z" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 6H14" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M10 9H14" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>

      {/* Video */}
      <Svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2">
        <Rect
          x="4"
          y="8"
          width="14"
          height="8"
          rx="2"
          ry="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M18 10L22 12L18 14V10Z" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>

      {/* Webpage */}
      <Svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2">
        <Rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="2"
          ry="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="8" cy="10" r="1" fill="#D1D5DB" />
        <Path d="M12 10H16" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export default HandDrawnIcons;
