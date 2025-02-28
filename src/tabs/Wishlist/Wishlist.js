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
        <FullButton onPress={() => navigation.push('Development')} title="Development" />
        <FullButton
          onPress={() => navigation.push('ITSoftwareDevelopment')}
          title="IT & Software Development"
        />
        <FullButton onPress={() => navigation.push('Business')} title="Business" />
        <FullButton
          onPress={() => navigation.push('FinanceAccounting')}
          title="Finance & Accounting"
        />
        <FullButton
          onPress={() => navigation.push('OfficeProductivity')}
          title="Office Productivity"
        />
        <FullButton
          onPress={() => navigation.push('PersonalDevelopment')}
          title="Personal Development"
        />
        <FullButton onPress={() => navigation.push('Design')} title="Design" />
        <FullButton onPress={() => navigation.push('Marketing')} title="Marketing" />
        <FullButton onPress={() => navigation.push('Lifestyle')} title="Lifestyle" />
        <FullButton
          onPress={() => navigation.push('PhotographyVideo')}
          title="Photography & Video"
        />
        <FullButton onPress={() => navigation.push('HealthFitness')} title="Health & Fitness" />
        <FullButton onPress={() => navigation.push('Music')} title="Music" />
        <FullButton
          onPress={() => navigation.push('TeachingAcademics')}
          title="Teaching & Academics"
        />
      </View>
    </UserBackground>
  );
}
