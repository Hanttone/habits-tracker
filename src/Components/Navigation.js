import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomePage from '../Pages/Home';
import HabitsPage from '../Pages/Habits'

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Habits" component={HabitsPage} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

