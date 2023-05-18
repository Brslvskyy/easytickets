/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Login from './src/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/Register';
import MainMenu from './src/MainMenu';
import NewEvent from './src/NewEvent';
import ChangeInfo from './src/ChangeInfo';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="NewEvent" component={NewEvent} />
        <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
