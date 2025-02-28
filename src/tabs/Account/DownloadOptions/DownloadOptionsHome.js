import { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '~/context/ThemeContext';
import UserBackground from '~/components/UserBackground';
import ToggleBtn from '~/components/ToggleBtn';

import CustomeText from '~/components/CustomeText';

import FullButton from '~/components/FullButton';

export default function DownloadOptionsHome(navigation) {
  const { colors } = useContext(ThemeContext);
  return (
    <UserBackground>
      <View className="mt-6">
        <FullButton
          onpress={() => navigation.push('DownloadOptions')}
          title="Video download quality"
        />
        <ToggleBtn title="Dowload over WI-FI only" />
        {''}
        <ToggleBtn title="Ask before downloading large lecture resources" />
        {''}
      </View>
    </UserBackground>
  );
}
