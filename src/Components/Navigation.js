import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HabitsPage from '../Pages/Habits';
import Statistics from '../Pages/Statistics';
import HomeIcon from '../Assets/HomeIcon';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator
      initialRouterName="Home"
      tabBarOptions={{activeTintColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={HabitsPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}
