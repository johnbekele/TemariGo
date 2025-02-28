import { View, Text } from 'react-native';
import { useContext } from 'react';
import UserBackground from '~/components/UserBackground';
import { ThemeContext } from '~/context/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function OcupationInterestHome() {
  const { colors } = useContext(ThemeContext);
  return (
    <UserBackground>
      <View className=" ">
        <View
          style={{ backgroundColor: '#3c4145' }}
          className="w-sm mt-10 flex-row items-center justify-center  *:mx-2">
          <MaterialIcons name="person" size={24} color="orange" />
          <Text style={{ color: colors.textColor }}>
            Answer a few questions to improve your content recommedndations
          </Text>
        </View>
      </View>
    </UserBackground>
  );
}
