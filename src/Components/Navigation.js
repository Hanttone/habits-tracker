import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
        inActiveTintColor: '#CBAAA9',
        style: {backgroundColor: '#aa7a78'},
        labelStyle: {fontSize: 13},
      }}>
      <Tab.Screen name="Home" component={HabitsPage} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="New Habit" component={CreateHabit} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
