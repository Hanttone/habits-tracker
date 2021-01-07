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

import Native from './client/src/Pages/Native';
import LogIn from './client/src/Pages/LogIn';
import SignUp from './client/src/Pages/SignUp';
import HomePage from './client/src/Pages/Home';
import NavigationTabs from './client/src/Components/Navigation';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomePage} />
        <RootStack.Screen name="LogIn" component={LogIn} />
        <RootStack.Screen name="Navigation" component={NavigationTabs} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="Native" component={Native} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
