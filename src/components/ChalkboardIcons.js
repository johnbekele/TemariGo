import React from 'react';
import { View, StyleSheet } from 'react-native';

import Svg, { Path, Rect } from 'react-native-svg';

const BookIcon = () => (
  <Svg width={50} height={50} viewBox="0 0 50 50">
    {/* Book cover */}
    <Rect
      x="10"
      y="10"
      width="30"
      height="35"
      fill="none"
      stroke="white"
      strokeWidth="2"
      rx="2" // Rounded corners for a softer look
    />
    {/* Pages */}
    <Path
      d="M25 10 L25 45 M15 15 L15 40 M35 15 L35 40"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    />
  </Svg>
);

const BrowserWindowIcon = () => (
  <Svg width={70} height={50} viewBox="0 0 70 50">
    {/* Window frame */}
    <Rect x="5" y="5" width="60" height="40" fill="none" stroke="white" strokeWidth="2" rx="3" />
    {/* Sidebar */}
    <Rect x="10" y="10" width="15" height="30" fill="none" stroke="white" strokeWidth="1.5" />
    {/* Image placeholder (simplified as a rectangle with a circle for a photo icon) */}
    <Rect x="30" y="10" width="30" height="15" fill="none" stroke="white" strokeWidth="1.5" />
    <Path
      d="M45 12 A3 3 0 0 1 48 15 A3 3 0 0 1 45 18 A3 3 0 0 1 42 15 A3 3 0 0 1 45 12"
      fill="none"
      stroke="white"
      strokeWidth="1"
    />
    {/* Text lines */}
    <Path d="M30 30 H60 M30 35 H60" fill="none" stroke="white" strokeWidth="1" />
  </Svg>
);

const VideoPlayerIcon = () => (
  <Svg width={50} height={30} viewBox="0 0 50 30">
    {/* Player frame */}
    <Rect x="5" y="5" width="40" height="20" fill="none" stroke="white" strokeWidth="2" rx="2" />
    {/* Play button (triangle) */}
    <Path d="M20 10 L30 15 L20 20 Z" fill="none" stroke="white" strokeWidth="1.5" />
  </Svg>
);
const ChalkboardIcons = () => (
  <View style={styles.container}>
    <View style={styles.book}>
      <BookIcon />
    </View>
    <View style={styles.browser}>
      <BrowserWindowIcon />
    </View>
    <View style={styles.video}>
      <VideoPlayerIcon />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  book: {
    margin: 10,
    transform: [{ rotate: '45deg' }], // Rotate to match the angle in the image
  },
  browser: {
    margin: 10,
  },
  video: {
    margin: 10,
    transform: [{ rotate: '-30deg' }], // Rotate to match the angle in the image
  },
});

export default ChalkboardIcons;
