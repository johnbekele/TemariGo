import { View, Text } from 'react-native';
import React from 'react';
import UserBackground from '~/components/UserBackground';
import CustomeText from '~/components/CustomeText';

export default function Wishlist() {
  return (
    <UserBackground>
      <CustomeText title="Wishlist" />
    </UserBackground>
  );
}
