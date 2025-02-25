// tabOptions.js
import { MaterialIcons } from '@expo/vector-icons';

export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    const icons = {
      HomeScreen: 'home',
      Profile: 'person',
      Settings: 'settings',
    };

    return <MaterialIcons name={icons[route.name]} size={size} color={color} />;
  },
});
