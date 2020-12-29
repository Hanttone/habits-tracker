/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Native from './src/Pages/Native';
import HabitsPage from './src/Pages/Habits';
import HomePage from './src/Pages/Home';
import Btn from './src/Components/Button';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
