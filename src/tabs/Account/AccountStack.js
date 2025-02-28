import { useContext } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '~/context/ThemeContext';
import ToggleButton from '~/components/ThemToggle';
import CustomBackButton from '~/components/CustomBackButton';

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

const Stack = createStackNavigator();

const screens = [
  { name: 'AccountHome', component: Account },
  { name: 'DownloadOptions', component: DownloadOptions },
  { name: 'VideoPlayBackHome', component: VideoPlayBackHome },
  { name: 'DownloadCourses', component: DownloadCourses },
  { name: 'OcupationInterestHome', component: OcupationInterestHome },
  { name: 'PushNotificationHome', component: PushNotificationHome },
  { name: 'LearningRemindersHome', component: LearningRemindersHome },
  { name: 'EmailNotificationHome', component: EmailNotificationHome },
  { name: 'AccountSecurityHome', component: AccountSecurityHome },
  { name: 'CloseAccountHome', component: CloseAccountHome },
  { name: 'AboutTemarigoHome', component: AboutTemarigoHome },
  { name: 'AboutTemarigoBusinessHome', component: AboutTemarigoBusinessHome },
  { name: 'HelpAndSupportHome', component: HelpAndSupportHome },
  { name: 'ShareTemarigoAppHome', component: ShareTemarigoAppHome },
];

const AccountStack = () => {
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
          backgroundColor: colors.backgroundColor,
          borderBottomColor: colors.borderColor,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowColor: colors.borderColor,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.textColor,
        },
        headerShadowVisible: false,
        headerLeft: () => <CustomBackButton navigation={navigation} colors={colors} />,
      })}>
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AccountStack;
