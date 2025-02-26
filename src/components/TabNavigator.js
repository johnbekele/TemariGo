// navigation/TabNavigator.js
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../tabs/Home';
import Profile from '../tabs/Profile';
import Settings from '../tabs/Settings';
import ToggleButton from '../components/ToggleButton';
import UserBackground from '../components/UserBackground';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <UserBackground>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          headerStyle: { backgroundColor: '#f5f5f5' }, // Optional: Default header style
          headerTintColor: '#000', // Default header text/icon color
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <ToggleButton />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </UserBackground>
  );
}
