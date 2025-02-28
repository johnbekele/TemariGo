import { View, Text } from 'react-native';
import React from 'react';
import UserBackground from '~/components/UserBackground';
import ToggleBtn from '~/components/ToggleBtn';

export default function VideoPlayBackHome() {
  return (
    <UserBackground>
      <View style={{ padding: 20 }}>
        <ToggleBtn title="Auto-play next Lecture" />
      </View>
    </UserBackground>
  );
}
