import { View, Text } from 'react-native';
import React from 'react';
import { Card } from '@rneui/themed';
import { Button, Icon } from '@rneui/themed';
import UserBackground from '~/components/UserBackground';
import ToggleButton from '~/components/ToggleButton';

export default function Featured() {
  return (
    <UserBackground>
      <View>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </UserBackground>
  );
}
