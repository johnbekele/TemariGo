import { useContext } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ToggleButton from '~/components/ThemToggle';
import CustomBackButton from '~/components/CustomBackButton';
import { ThemeContext } from '~/context/ThemeContext';

import Wishlist from './Wishlist';
import Development from './Development';
import ITSoftwareDevelopment from './ITSoftwareDevelopment';
import Business from './Business';
import FinanceAccounting from './FinanceAccounting';
import OfficeProductivity from './OfficeProductivity';
import PersonalDevelopment from './PersonalDevelopment';
import Design from './Design';
import Marketing from './Marketing';
import Lifestyle from './Lifestyle';
import PhotographyVideo from './PhotographyVideo';
import HealthFitness from './HealthFitness';
import Music from './Music';
import TeachingAcademics from './TeachingAcademics';

const Stack = createStackNavigator();

const routeComponents = [
  { name: 'Wishlist', component: Wishlist },
  { name: 'Development', component: Development },
  { name: 'IT & Software Development', component: ITSoftwareDevelopment },
  { name: 'Business', component: Business },
  { name: 'Finance &Accounting', component: FinanceAccounting },
  { name: 'Office Productivity', component: OfficeProductivity },
  { name: 'Personal Development', component: PersonalDevelopment },
  { name: 'Design', component: Design },
  { name: 'Marketing', component: Marketing },
  { name: 'Lifestyle', component: Lifestyle },
  { name: 'Photography & Video', component: PhotographyVideo },
  { name: 'HealthFitness', component: HealthFitness },
  { name: 'Music', component: Music },
  { name: 'Teaching & Academics', component: TeachingAcademics },
];

const WishlistStack = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Wishlist"
      screenOptions={({ route, navigation }) => ({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <ToggleButton />
          </View>
        ),
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.backgroundColor, // Background color of header
          borderBottomColor: colors.borderColor, // Divider color
          elevation: 5,
          shadowOpacity: 0.2,
          shadowColor: colors.borderColor,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6, // Blur effect radius
        },
        headerTitleAlign: 'center', // Center header title
        headerTitleStyle: {
          color: colors.textColor, // Header text color
        },
        headerShadowVisible: false,
        headerLeft: () => <CustomBackButton navigation={navigation} colors={colors} />,
      })}>
      {routeComponents.map((route, index) => (
        <Stack.Screen name={route.name} component={route.component} key={index} />
      ))}
    </Stack.Navigator>
  );
};

export default WishlistStack;
