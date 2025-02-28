import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { ThemeContext } from '~/context/ThemeContext';

export default function ToggleBtn({ title }) {
  const { colors } = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);

  return (
    <View
      className=" pb-safe-or-11"
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text className="text-medium" style={{ color: colors.textColor }}>
        {title}
      </Text>
      <View style={{ justifyContent: 'flex-end' }}>
        <ToggleSwitch
          isOn={isOn}
          onColor="#4635B1"
          labelStyle={{ color: colors.textColor, fontWeight: '900' }}
          size="medium"
          onToggle={(newIsOn) => {
            console.log('changed to : ', newIsOn);
            setIsOn(newIsOn);
          }}
        />
      </View>
    </View>
  );
}
