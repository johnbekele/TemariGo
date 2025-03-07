import { View, Text, Button } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Background from '~/components/Background';
import HeadingText from '~/components/HeadingText';
import UserHeader from '~/components/UserHeader';
import { useAuth } from '~/context/useAuth';
import Footer from '~/components/Footer';
import UserBackground from '~/components/UserBackground';
import FullButton from '~/components/FullButton';
import CustomeText from '~/components/CustomeText';
import { ThemeContext } from '~/context/ThemeContext';
import TextButton from '~/components/TextButton';

export default function Account({ route, navigation }) {
  const { colors } = useContext(ThemeContext);
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
      <View>
        <UserHeader imageUrl={imageUrl} username={username} />
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <CustomeText containerClass="justify-start pb-6 w-full   " className="text-sm">
            Video preferences
          </CustomeText>
          <FullButton onPress={() => navigation.push('DownloadOptions')} title="Download Options" />
          <FullButton
            onPress={() => navigation.push('VideoPlayBackHome')}
            title="Video Play back options"
          />
          <FullButton
            onPress={() => navigation.push('DownloadCourses')}
            title="Your download courses"
          />
        </View>
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <CustomeText containerClass="justify-start pb-6 w-full   " className="text-sm">
            Account settings
          </CustomeText>
          <FullButton
            onPress={() => navigation.push('OcupationInterestHome')}
            title="Ocupation and interest"
          />
          <FullButton
            onPress={() => navigation.push('PushNotificationHome')}
            title="Push notification "
          />
          <FullButton
            onPress={() => navigation.push('LearningRemindersHome')}
            title="Learning reminders"
          />
          <FullButton
            onPress={() => navigation.push('EmailNotificationHome')}
            title="Email notification "
          />
          <FullButton
            onPress={() => navigation.push('AccountSecurityHome')}
            title="Account security"
          />
          <FullButton onPress={() => navigation.push('CloseAccountHome')} title="Close account " />
        </View>
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <CustomeText containerClass="justify-start pb-6 w-full   " style={{ flex: 1 }}>
            Support{' '}
          </CustomeText>
          <FullButton
            onPress={() => navigation.push('AboutTemarigoHome')}
            title="About Temarigo "
          />
          <FullButton
            onPress={() => navigation.push('AboutTemarigoBusinessHome')}
            title="About Temarigo business"
          />
          <FullButton
            onPress={() => navigation.push('AccountSecurityHome')}
            title="Your download courses"
          />
          <FullButton
            onPress={() => navigation.push('HelpAndSupportHome')}
            title="Help and support"
          />
          <FullButton
            onPress={() => navigation.push('ShareTemarigoAppHome')}
            title="Share Temarigo app"
          />
        </View>
        <View className="flex-column items-center justify-center pb-10">
          <TextButton
            className="text-xl font-semibold"
            style={{ color: colors.buttonText }}
            title="Sign out"
            onPress={handleSignOut}
          />

          <Text className="text-sans-serif pt-2 *:text-base" style={{ color: colors.textColor }}>
            Temarigo V1.0.0{' '}
          </Text>
        </View>
      </View>
    </UserBackground>
  );
}
