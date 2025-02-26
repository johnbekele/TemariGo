import { View, Text, Button } from 'react-native';
import React from 'react';
import Background from '~/components/Background';
import HeadingText from '~/components/HeadingText';
import UserHeader from '~/components/UserHeader';
import { useAuth } from '~/context/useAuth';
import Footer from '~/components/Footer';
import UserBackground from '~/components/UserBackground';

export default function Settings({ route, navigation }) {
  const { imageUrl, username } = route.params || {};
  const { logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <UserBackground>
      <View style={{ flex: 1 }}>
        <UserHeader imageUrl={imageUrl} username={username} />
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          {/* Add settings UI components here */}
        </View>
      </View>
      <Footer>
        <Button title="Sign Out" onPress={handleSignOut} />
      </Footer>
    </UserBackground>
  );
}
