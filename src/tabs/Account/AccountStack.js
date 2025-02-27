import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToggleButton from '~/components/ToggleButton';
import CustomBackButton from '~/components/CustomBackButton';

import { createStackNavigator } from '@react-navigation/stack';
import DownloadOptions from './DownloadOptions/DownloadOptionsHome';
import VideoPlayBackHome from './VideoPlayBack/VideoPlayBackHome';
import DownloadCourses from './DownloadCourses/DownloadCourses';
import OcupationInterestHome from './OcupationInterest/OcupationInterestHome';
import PushNotificationHome from './PushNotification/PushNotificationHome';
import LearningRemindersHome from './LearningReminders/LearningRemindersHome';
import EmailNotificationHome from './EmailNotification/EmailNotificationHome';
import AccountSecurityHome from './AccountSecurity/AccountSecurityHome';
import CloseAccountHome from './CloseAccount/CloseAccountHome';

import AboutTemarigoHome from './AboutTemarigo/AboutTemarigoHome';
import AboutTemarigoBusinessHome from './AboutTemarigoBusiness/AboutTemarigoBusinessHome';
import HelpAndSupportHome from './HelpAndSupport/HelpAndSupportHome';
import ShareTemarigoAppHome from './ShareTemarigoApp/ShareTemarigoAppHome';

import Account from './Account';

import { ThemeContext } from '~/context/ThemeContext';
import Button from '~/components/Button';

const Stack = createStackNavigator();

const AccountStack = ({}) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="AccountHome"
      screenOptions={({ route, navigation }) => ({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <ToggleButton />
          </View>
        ),
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.backgroundColor, // Background color of header
          // borderBottomWidth: 0.2, // Thickness of divider
          borderBottomColor: colors.borderColor, // Divider color

          elevation: 5,
          shadowOpacity: 0.2,
          shadowColor: colors.borderColor,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6, // blure effect radius
        },
        headerTitleAlign: 'center', // Center header title
        headerTitleStyle: {
          color: colors.textColor, // Header text color
        },
        headerShadowVisible: false,
        headerLeft: () => <CustomBackButton navigation={navigation} colors={colors} />,
        // Removes shadow divider (for some versions)
      })}>
      <Stack.Screen name="AccountHome" component={Account} />
      <Stack.Screen name="DownloadOptions" component={DownloadOptions} />
      <Stack.Screen name="VideoPlayBackHome" component={VideoPlayBackHome} />
      <Stack.Screen name="DownloadCourses" component={DownloadCourses} />
      {/* Account Settings */}
      <Stack.Screen name="OcupationInterestHome" component={OcupationInterestHome} />
      <Stack.Screen name="PushNotificationHome" component={PushNotificationHome} />
      <Stack.Screen name="LearningRemindersHome" component={LearningRemindersHome} />
      <Stack.Screen name="EmailNotificationHome" component={EmailNotificationHome} />
      <Stack.Screen name="AccountSecurityHome" component={AccountSecurityHome} />
      <Stack.Screen name="CloseAccountHome" component={CloseAccountHome} />
      {/* Support */}
      <Stack.Screen name="AboutTemarigoHome" component={AboutTemarigoHome} />
      <Stack.Screen name="AboutTemarigoBusinessHome" component={AboutTemarigoBusinessHome} />
      <Stack.Screen name="HelpAndSupportHome" component={HelpAndSupportHome} />
      <Stack.Screen name="ShareTemarigoAppHome" component={ShareTemarigoAppHome} />
    </Stack.Navigator>
  );
};

export default AccountStack;
