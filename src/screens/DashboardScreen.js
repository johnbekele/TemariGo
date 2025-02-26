import { View, Text } from 'react-native';
import React from 'react';
import TabNavigator from '~/components/TabNavigator';
import UserBackground from '~/components/UserBackground';

export default function DashboardScreen() {
  return (
    <UserBackground>
      <TabNavigator />
    </UserBackground>
  );
}
