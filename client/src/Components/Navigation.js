import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import HabitsPage from '../Pages/Habits';
import CreateHabit from '../Pages/CreateHabit';
import Statistics from '../Pages/Statistics';
import Settings from '../Pages/Settings';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator
      initialRouterName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#CBAAA9',
        style: {
          backgroundColor: '#aa7a78',
          height: '10%',
          paddingBottom: '1%',
          borderTopColor: 'transparent',
        },
        labelStyle: {fontSize: 12},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Start') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'barschart' : 'barschart';
          } else if (route.name === 'New Habit') {
            iconName = focused ? 'checksquareo' : 'checksquareo';
          } else {
            iconName = focused ? 'setting' : 'setting';
          }

          return <Icon name={iconName} color={color} size={45} />;
        },
      })}>
      <Tab.Screen name="Start" component={HabitsPage} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="New Habit" component={CreateHabit} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
