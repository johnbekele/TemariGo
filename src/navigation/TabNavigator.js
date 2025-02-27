// navigation/TabNavigator.js
import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AccountStack from '~/tabs/Account/AccountStack';
import Featured from '~/tabs/Featured/Featured';
import MyLearning from '~/tabs/MyLearning/MyLearning';
import Search from '~/tabs/Search/Search';
import Wishlist from '~/tabs/Wishlist/Wishlist';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToggleButton from '../components/ToggleButton';
import UserBackground from '../components/UserBackground';

import { ThemeContext } from '~/context/ThemeContext';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { colors } = useContext(ThemeContext);
  return (
    <UserBackground>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
          headerShadowVisible: false, // Removes shadow divider (for some versions)
          tabBarStyle: {
            backgroundColor: colors.backgroundColor, // Background color
            borderTopWidth: 0, // Remove default border
            shadowColor: colors.borderColor, // Shadow color
            shadowOpacity: 0.2, // Slightly increase opacity
            shadowOffset: { width: 0, height: -3 }, // Shadow direction (upwards)
            shadowRadius: 6, // Stronger blur effect
            elevation: 10, // Required for Android
          },

          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Featured') {
              iconName = 'star';
            } else if (route.name === 'Profile' || route.name === 'Account') {
              iconName = 'person';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Wishlist') {
              iconName = 'favorite';
            } else if (route.name === 'My learning') {
              iconName = 'play-circle-outline';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.activeIcon,
          tabBarInactiveTintColor: colors.inactiveIcon,
        })}>
        <Tab.Screen name="Featured" component={Featured} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="My learning" component={MyLearning} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </UserBackground>
  );
}
