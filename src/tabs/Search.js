import { View, Text } from 'react-native';
import React from 'react';
import UserBackground from '~/components/UserBackground';
import CustomeText from '~/components/CustomeText';

export default function Search() {
  return (
    <UserBackground>
      <CustomeText title="Search" />
    </UserBackground>
  );
}
