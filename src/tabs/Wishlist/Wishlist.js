import { View, Text } from 'react-native';
import React from 'react';
import UserBackground from '~/components/UserBackground';
import CustomeText from '~/components/CustomeText';
import ImageHeader from '~/components/ImageHeader';
import FullButton from '~/components/FullButton';

export default function Wishlist({ navigation }) {
  return (
    <UserBackground>
      <ImageHeader />
      <View className="mt-6">
        <FullButton onPress={() => navigation.push('OcupationInterestHome')} title="Development" />
        <FullButton
          onPress={() => navigation.push('PushNotificationHome')}
          title="IT & Software Development"
        />
        <FullButton onPress={() => navigation.push('LearningRemindersHome')} title="Business" />
        <FullButton
          onPress={() => navigation.push('EmailNotificationHome')}
          title="Finance & Accounting "
        />
        <FullButton
          onPress={() => navigation.push('AccountSecurityHome')}
          title="Office Productivity"
        />
        <FullButton
          onPress={() => navigation.push('CloseAccountHome')}
          title="Personal Development"
        />
        <FullButton onPress={() => navigation.push('CloseAccountHome')} title="Design" />
        <FullButton onPress={() => navigation.push('CloseAccountHome')} title=" Marketing " />
        <FullButton onPress={() => navigation.push('CloseAccountHome')} title="Lifestyle " />
        <FullButton
          onPress={() => navigation.push('CloseAccountHome')}
          title="Phototgraphy & Video"
        />
        <FullButton onPress={() => navigation.push('CloseAccountHome')} title="Health & Fitness" />
        <FullButton onPress={() => navigation.push('CloseAccountHome')} title="Music" />
        <FullButton
          onPress={() => navigation.push('CloseAccountHome')}
          title="teaching & Academics"
        />
      </View>
    </UserBackground>
  );
}
