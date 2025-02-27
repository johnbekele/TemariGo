import { View, Text, Button } from 'react-native';
import React from 'react';
import Background from '~/components/Background';
import HeadingText from '~/components/HeadingText';
import UserHeader from '~/components/UserHeader';
import { useAuth } from '~/context/useAuth';
import Footer from '~/components/Footer';
import UserBackground from '~/components/UserBackground';
import FullButton from '~/components/FullButton';
import CustomeText from '~/components/CustomeText';
export default function Account({ route, navigation }) {
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
          <CustomeText style={{}}>Video preferences</CustomeText>
          <FullButton title="Download Options" />
          <FullButton title="Video Play back options" />
          <FullButton title="Your download courses" />
        </View>
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <CustomeText style={{}}>Account settings</CustomeText>
          <FullButton title="Ocupation and interest" />
          <FullButton title="Push notification " />
          <FullButton title="Learning reminders" />
          <FullButton title="Email notification " />
          <FullButton title="Account security" />
          <FullButton title="Close account " />
        </View>
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <CustomeText style={{ flex: 1 }}>Support </CustomeText>
          <FullButton title="About Temarigo " />
          <FullButton title="About Temarigo business" />
          <FullButton title="Your download courses" />
          <FullButton title="Help and support" />
          <FullButton title="Share Temarigo app" />
        </View>
      </View>
      <Footer>
        <Button title="Sign Out" onPress={handleSignOut} />
      </Footer>
    </UserBackground>
  );
}
